type Subscriber = (data: object) => void;

export interface Store {
    readonly data: object,
    setData: (setFn: (data: object) => void) => void,
    subscribe: (subscriber: Subscriber) => void,
    unsubscribe: (subscriber: Subscriber) => void,
}

export function createStore(data: object): Store;

export function useGlobalStoreRead<T>(
    store: Store,
    readFn: (data: object) => T,
    compareFn?: (value1: T, value2: T) => boolean
): T;

export function useGlobalStoreWrite<T>(
    store: Store,
    writeFn: (value: T, data: object) => void
): (value: T) => void;

export function useStoreInit(
    scope: object,
    data: object
): void;

export function useStoreRead<T>(
    scope: object,
    readFn: (data: object) => T,
    compareFn?: (value1: T, value2: T) => boolean
): T;

export function useStoreWrite<T>(
    scope: object,
    writeFn: (value: T, data: object) => void
): (value: T) => void;
