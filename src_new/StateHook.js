import {resolveCurrentlyProcessing} from './CurrentlyProcessing';
import {isFunction} from './Util';
import {resolveTree} from './ResolveTree';

/**
 *
 * @param {VirtualNode} context
 * @param {*} initialValue
 * @constructor
 */
export function StateHook(context, initialValue) {
    this.context_ = context;
    
    this.value_ = initialValue;

    this.setValue_ = (value) => {
        let newValue;
        
        if (isFunction(value)) {
            newValue = value(this.value_);
        } else {
            newValue = value;
        }
        
        if (newValue !== this.value_) {
            this.value_ = newValue;
            resolveTree(this.context_);
        }
    };
}

export const useState = (initialValue) => {
    const [functionalVirtualNode, hookIndex] = resolveCurrentlyProcessing();

    /**
     * @type {StateHook}
     */
    let hook;

    if (functionalVirtualNode.hooks_.length > hookIndex) {
        hook = functionalVirtualNode.hooks_[hookIndex];
    } else {
        hook = new StateHook(functionalVirtualNode, initialValue);
        functionalVirtualNode.hooks_.push(hook);
    }

    return [hook.value_, hook.setValue_];
}
