import { getLocalizationAsync } from 'expo-localization';
import { AsyncStorage, LANGUAGE_KEY } from 'utils/async-storage-helper';

export const resources = {
    az: require('./locales/az.json'),
    en: require('./locales/en.json'),
    ru: require('./locales/ru.json'),
};

export const languageDetector: any = {
    type: 'languageDetector',
    async: true,
    detect: (callback) => {
        return getLocalizationAsync().then(async ({ locale }) => {
            const asyncStorageLocale = await AsyncStorage.getItem(LANGUAGE_KEY);
            callback(asyncStorageLocale || locale.split('-')[0]);
        });
    },
    init: () => {
        //
    },
    cacheUserLanguage: (lang) => {
        AsyncStorage.setItem(LANGUAGE_KEY, lang);
    },
};

export const cacheOptions = {
    prefix: 'i18next_res_',
    expirationTime: 5 * 60 * 1000,
};
