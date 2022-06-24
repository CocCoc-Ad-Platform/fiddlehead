import {VirtualNode, NAMESPACE_HTML, NAMESPACE_SVG, Portal} from './VirtualNode';
import {linkNativeNode, attachVirtualNode, extractVirtualNode} from './Externals';
import {renderTree} from './RenderTree';

/**
 * 
 * @param {any} children 
 * @param {Element} targetNativeNode
 */
 export function render(children, targetNativeNode) {
    const portal = createPortal(children, targetNativeNode);

    renderTree(portal);
}

/**
 * 
 * @param {any} children 
 * @param {Element} targetNativeNode
 * @returns {VirtualNode}
 */
export function createPortal(children, targetNativeNode) {
    /**
     * @type {VirtualNode}
     */
    let portal;

    if (!(portal = extractVirtualNode(targetNativeNode))) {
        if (__DEV__) {
            if (targetNativeNode.firstChild) {
                console.error('Target node must be empty');
            }
        }
        
        portal = new VirtualNode(Portal, {});

        // Determine the namespace (we only support SVG and HTML namespaces)
        portal.namespace_ = ('ownerSVGElement' in targetNativeNode) ? NAMESPACE_SVG : NAMESPACE_HTML;
        
        linkNativeNode(portal, targetNativeNode);
        attachVirtualNode(targetNativeNode, portal);
    }

    portal.props_.children = children;

    return portal;
}
