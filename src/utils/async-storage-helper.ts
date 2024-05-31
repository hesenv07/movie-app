import RNAsyncStorage from '@react-native-async-storage/async-storage';
import { Callback, CallbackWithResult } from '@react-native-async-storage/async-storage/lib/typescript/types';

export const LANGUAGE_KEY = 'i18nextLng';

const getItem = async (key: string, callback?: CallbackWithResult<string> | undefined): Promise<any> => {
    const value = (await RNAsyncStorage.getItem(key, callback)) || '';
    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
};

const setItem = async (key: string, value: any, callback?: Callback | undefined): Promise<void> => {
    const valueStr = JSON.stringify(value);
    await RNAsyncStorage.setItem(key, valueStr, callback);
};

const pushItem = async (key: string, value: any): Promise<void> => {
    const data = (await getItem(key)) || [];
    const newHistory = [{ ...value }, ...data];
    await setItem(key, newHistory);
};

const removeItem = async (key: string, callback?: Callback | undefined): Promise<void> => {
    await RNAsyncStorage.removeItem(key, callback);
};

const printAsyncStorage = async (): Promise<void> => {
    const keys = await RNAsyncStorage.getAllKeys();

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        return await getItem(key);
    }
};

export const AsyncStorage = {
    getItem,
    setItem,
    removeItem,
    pushItem,
    printAsyncStorage,
};
