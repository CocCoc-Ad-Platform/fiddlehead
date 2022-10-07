import {useEffect, useState} from 'core.pkg';

/**
 * 
 * @param {{}} initialData 
 * @returns {Store}
 */
export let createStore = (initialData) => {
    if (!(
        initialData != null && // is not nullish
        initialData.constructor === Object
    )) {
        throw new Error('Store data must be a plain object');
    }
    
    let data = initialData;
    let subscribers = new Set();

    return {
        get data() {
            return data;
        },
        setData(setFn) {
            setFn(data);
            subscribers.forEach((subscriber) => {
                subscriber(data);
            });
        },
        subscribe: subscribers.add.bind(subscribers),
        unsubscribe: subscribers.delete.bind(subscribers),
    };
};

/**
 * 
 * @param {Store} store
 * @param {function} readFn
 * @param {function?} compareFn
 * @returns {any}
 */
export let useGlobalStoreRead = (store, readFn, compareFn) => {
    let datum = useState(readFn(store.data));

    useEffect(() => {
        let subscriber = (data) => {
            if (compareFn === undefined) {
                datum[1](readFn(data));
            } else {
                datum[1]((prevValue) => {
                    let newValue = readFn(data);
                    if (compareFn(prevValue, newValue)) {
                        return prevValue;
                    } else {
                        return newValue;
                    }
                });
            }
        };
        store.subscribe(subscriber);
        return () => {
            store.unsubscribe(subscriber);
        };
    }, [store, readFn, compareFn]);

    return datum[0];
};

/**
 * 
 * @param {Store} store
 * @param {function} writeFn
 * @returns {function}
 */
export let useGlobalStoreWrite = (store, writeFn) => {
    return (value) => {
        store.setData((data) => {
            writeFn(data, value);
        });
    };
};