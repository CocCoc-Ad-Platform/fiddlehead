import {RefHook} from './RefHook';
import {isArray, isNumber, isString} from './Util';

/**
 *
 * @param {string|function} type
 * @param {{}} props
 * @param {string|null} key
 * @param {RefHook|null} ref
 * @return {VirtualNode}
 * @constructor
 */
export function VirtualNode(type, props, key, ref) {
    this.type_ = type;
    this.props_ = props;
    this.key_ = key;
    this.ref_ = ref;

    this.hooks_ = [];

    this.parent_ = null;
    this.children_ = [];
    this.path_ = '';
    this.posInRow_ = null;

    this.data_ = null;
    this.nativeNode_ = null;
    this.ns_ = null;
}

export const NS_HTML = 0;
export const NS_SVG = 1;

// Note:
// Use special URI characters

export const NODE_TEXT = '#';
export const NODE_ARRAY = '[';
export const NODE_FRAGMENT = '=';

export const PATH_SEP = '/';

/**
 * 
 * @param {*} key 
 * @returns {string}
 */
export function escapeVirtualNodeKey(key) {
    return '@' + encodeURIComponent(key);
}

let functionalTypeInc = 0;

/**
 * 
 * @param {Function} type 
 * @returns {string}
 */
export function createFunctionalTypeAlias(type) {
    return /*type.name +*/ '{' + (++functionalTypeInc).toString(36);
}

let containerIdInc = 0;

/**
 * 
 * @returns {string}
 */
export function createContainerId() {
    return '~' + (++containerIdInc).toString(36);
}

/**
 * 
 * @param {VirtualNode} virtualNode 
 * @param {Node} nativeNode 
 */
export function linkNativeNode(virtualNode, nativeNode) {
    virtualNode.nativeNode_ = nativeNode;

    if (virtualNode.ref_ instanceof RefHook) {
        virtualNode.ref_.current = nativeNode;
    }
}

/**
 *
 * @param {*} content
 * @return {null|VirtualNode}
 */
export function createVirtualNodeFromContent(content) {
    if (content instanceof VirtualNode) {
        return content;
    }

    if (isString(content) || isNumber(content)) {
        const node = new VirtualNode(NODE_TEXT, {}, null, null);

        node.data_ = content;
        
        return node;
    }

    if (isArray(content)) {
        const node = new VirtualNode(NODE_ARRAY, {}, null, null);

        let posInRow = -1;
        for (let i = 0; i < content.length; i++) {
            const child = createVirtualNodeFromContent(content[i]);
            if (child !== null) {
                appendChildVirtualNode(node, child, ++posInRow);
            }
        }

        return node;
    }

    return null;
}

/**
 * 
 * @param {VirtualNode} parent 
 * @param {VirtualNode} child
 * @param {number} posInRow
 */
export function appendChildVirtualNode(parent, child, posInRow) {
    child.parent_ = parent;
    child.posInRow_ = posInRow;
    parent.children_[posInRow] = child;
}
