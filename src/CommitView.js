import {hydrateView, rehydrateView} from './HydrateView';

// Important!!!
// This module does not handle Portal nodes

export const updateView = (newVirtualNode, oldVirtualNode) => {
    rehydrateView(newVirtualNode, oldVirtualNode);

    if (newVirtualNode.nativeNode_ !== null) {
        const host = _findHostVirtualNode(newVirtualNode);
        if (host !== null) {
            host.lastManipulatedClientNativeNode_ = newVirtualNode.nativeNode_;
        }
    }
}

export const insertView = (virtualNode) => {
    hydrateView(virtualNode);

    if (virtualNode.nativeNode_ !== null) {
        const host = _findHostVirtualNode(virtualNode);
        if (host !== null) {
            const nativeNodeAfter = (
                host.lastManipulatedClientNativeNode_ !== null
                    ? host.lastManipulatedClientNativeNode_.nextSibling
                    : host.nativeNode_.firstChild
            );
            host.nativeNode_.insertBefore(virtualNode.nativeNode_, nativeNodeAfter);
            host.lastManipulatedClientNativeNode_ = virtualNode.nativeNode_;
        }
    }
}

export const deleteView = (subtree) => {
    _loopClientNativeNodes(subtree, (nativeNode) => {
        if (nativeNode.parentNode !== null) {
            nativeNode.parentNode.removeChild(nativeNode);
        }
    });
}

// Find the virtual node in the parent chain which its native node is not null
const _findHostVirtualNode = (virtualNode) => {
    let current = virtualNode.parent_;

    while (true) {
        if (current === null) {
            return null;
        }
        if (current.nativeNode_ !== null) {
            return current;
        }
        current = current.parent_;
    }
}

const _loopClientNativeNodes = (virtualNode, callback) => {
    let root = virtualNode;
    let current = virtualNode;

    while (true) {
        if (current.nativeNode_ !== null) {
            callback(current.nativeNode_);
        } else if (current.child_ !== null) {
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
        }
        current = current.sibling_;
        continue;
    }
}
