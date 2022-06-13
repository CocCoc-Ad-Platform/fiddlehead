import {insertView, updateView, deleteView} from './CommitView';
import {destroyEffects, EFFECT_LAYOUT, EFFECT_NORMAL, mountEffects} from './EffectHook';
import {resolveMountingPoint, walkNativeChildren} from './MountingPoint';
import {reconcileChildren} from './Reconciliation';
import {Portal, VirtualNode} from './VirtualNode';

// Using dom fragment produces better performance on Safari
const usesDomFragment = navigator.vendor === 'Apple Computer, Inc.';
const domFragment = usesDomFragment ? document.createDocumentFragment() : null;

/**
 * @type {VirtualNode}
 */
let mpt;

/**
 * @type {Node}
 */
let mptNative;

export function renderTree(current) {
    const effectMountNodes = new Map();
    const effectDestroyNodes = new Map();
    
    // The mounting point of the current
    mpt = resolveMountingPoint(current);
    
    // In the tree, the mounting point lies at a higher level
    // than the current, so we need to initialize/cleanup
    // its temporary properties from outside of the work loop
    walkNativeChildren(function (nativeChild) {
        mpt.lastTouchedNativeChild_ = nativeChild;
    }, mpt, current);

    if (usesDomFragment) {
        mptNative = mpt.nativeNode_;
        mpt.nativeNode_ = domFragment;
    }
    
    // Main work
    _workLoop(
        _performUnitOfWork, _onReturn, current,
        effectMountNodes, effectDestroyNodes
    );

    if (usesDomFragment) {
        mptNative.appendChild(domFragment);
        mpt.nativeNode_ = mptNative;
    }

    // Cleanup
    mpt.lastTouchedNativeChild_ = null;

    // Layout effects
    effectDestroyNodes.forEach(function (isUnmounted, node) {
        destroyEffects(EFFECT_LAYOUT, node, isUnmounted);
    });
    effectMountNodes.forEach(function (isNewlyMounted, node) {
        mountEffects(EFFECT_LAYOUT, node, isNewlyMounted);
    });

    // Effects
    setTimeout(function () {
        effectDestroyNodes.forEach(function (isUnmounted, node) {
            destroyEffects(EFFECT_NORMAL, node, isUnmounted);
        });
        effectMountNodes.forEach(function (isNewlyMounted, node) {
            mountEffects(EFFECT_NORMAL, node, isNewlyMounted);
        });
    });
}

function _performUnitOfWork(current, root, effectMountNodes, effectDestroyNodes) {
    const isRenderRoot = current === root;
    
    reconcileChildren(current, isRenderRoot);

    // Portal nodes never change the view itself
    if (current.type_ !== Portal) {
        if (isRenderRoot) {
            if (current.effectHook_ !== null) {
                effectDestroyNodes.set(current, false);
                effectMountNodes.set(current, false);
            }
        } else {
            if (current.alternate_ !== null) {
                updateView(current, current.alternate_);
                if (current.effectHook_ !== null) {
                    effectDestroyNodes.set(current.alternate_, false);
                    effectMountNodes.set(current, false);
                }
                current.alternate_ = null;
            } else {
                insertView(current);
                if (current.effectHook_ !== null) {
                    effectMountNodes.set(current, true);
                }
            }
        }
    }
    
    // Delete subtrees that no longer exist
    if (current.deletions_ !== null) {
        for (let i = 0; i < current.deletions_.length; ++i) {
            deleteView(current.deletions_[i]);
            _workLoop(function (node) {
                if (node.effectHook_ !== null) {
                    effectDestroyNodes.set(node, true);
                }
            }, null, current.deletions_[i]);
        }
        current.deletions_ = null;
    }
}

// Callback called after walking through a node and all of its ascendants
function _onReturn(current) {
    // This is when we cleanup the remaining temporary properties
    current.lastTouchedNativeChild_ = null;
}

// Reference: https://github.com/facebook/react/issues/7942
function _workLoop(performUnit, onReturn, root, r0, r1) {
    let current = root;
    while (true) {
        performUnit(current, root, r0, r1);
        if (current.child_ !== null) {
            current = current.child_;
            continue;
        }
        if (current === root) {
            return;
        }
        while (current.sibling_ === null) {
            if (current.parent_ === null || current.parent_ === root) {
                return;
            }
            current = current.parent_;
            if (onReturn !== null) {
                onReturn(current);
            }
        }
        current = current.sibling_;
    }
}
