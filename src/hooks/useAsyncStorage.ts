import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { AsyncStorage } from 'utils/async-storage-helper';

export const useAsyncStorage = <T>(
    key: string,
    initialValue?: T,
): [T | null, Dispatch<SetStateAction<T | null>>, () => Promise<void>, boolean] => {
    type Value = T | null;
    if (!key) {
        throw new Error('useAsyncStorage key may not be falsy');
    }
    const [state, setState] = useState<Value>();
    const [loading, setLoading] = useState(true);

    const set: Dispatch<SetStateAction<Value | undefined>> = useCallback(
        async (value) => {
            try {
                setLoading(true);
                await AsyncStorage.setItem(key, value, () => setState(value));
                setLoading(false);
            } catch {}
        },
        [key, setState],
    );

    const remove = useCallback(async () => {
        setLoading(true);
        await AsyncStorage.removeItem(key, () => setState(null));
        setLoading(false);
    }, [key, setState]);

    const initialize = async () => {
        setLoading(true);
        const asyncStorageValue = await AsyncStorage.getItem(key);
        if (
            asyncStorageValue !== undefined &&
            asyncStorageValue !== null &&
            asyncStorageValue !== '' &&
            asyncStorageValue !== 'undefined' &&
            asyncStorageValue !== 'null'
        ) {
            setState(asyncStorageValue);
            setLoading(false);
        } else {
            setState(initialValue || null);
            await AsyncStorage.setItem(key, initialValue || null);
            setLoading(false);
        }
    };

    useEffect(() => {
        initialize();
    }, []);

    return [state || null, set as Dispatch<SetStateAction<T | null>>, remove, loading];
};
