const PROP_VNODE = '%vnode';

/**
 * 
 * @param {Node} nativeNode 
 * @param {VNode} vnode 
 */
export function attachVNodeToNativeNode(nativeNode, vnode) {
    nativeNode[PROP_VNODE] = vnode;
}

/**
 * 
 * @param {Node} nativeNode 
 * @returns {VNode|undefined}
 */
export function extractVNodeFromNativeNode(nativeNode) {
    return nativeNode[PROP_VNODE];
}

/**
 * 
 * @param {VNode} vnode 
 * @param {Node} nativeNode
 */
 export function linkNativeNodeWithVNode(vnode, nativeNode) {
    vnode.nativeNode_ = nativeNode;

    if (vnode.ref_ !== null) {
        vnode.ref_.current = nativeNode;
    }
}