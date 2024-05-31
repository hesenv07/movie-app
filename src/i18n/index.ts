import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { cacheOptions, languageDetector, resources } from './config';

i18n.use(languageDetector)
    .use(initReactI18next)
    .init({
        defaultNS: 'common',
        fallbackLng: 'az',
        supportedLngs: ['az', 'en', 'ru'],
        debug: false,
        cache: cacheOptions,
        resources,
        react: {
            useSuspense: false,
        },
    });

export default i18n;
