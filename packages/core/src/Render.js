import {createPortal, createVNodeFromPortalElement} from './PortalElement';
import {attachVNodeToNativeNode, extractVNodeFromNativeNode} from './NodeToNode';
import {renderTree} from './RenderTree';

/**
 * 
 * @param {any} children 
 * @param {Element} targetNativeNode
 */
export let render = (children, targetNativeNode) => {
    let root = extractVNodeFromNativeNode(targetNativeNode);

    if (root) {
        // Update the children
        root.props_.children = children;
    } else {
        // Create a new root
        if (__DEV__) {
            if (targetNativeNode.firstChild) {
                console.error('The target node is not empty:', targetNativeNode);
            }
        }
        let portalElement = createPortal(children, targetNativeNode);
        root = createVNodeFromPortalElement(portalElement);
        attachVNodeToNativeNode(targetNativeNode, root);
    }

    renderTree(root);
};
