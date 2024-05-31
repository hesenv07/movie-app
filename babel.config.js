module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'react-native-reanimated/plugin',
            [
                'module-resolver',
                {
                    alias: {
                        assets: './src/assets',
                        boot: './src/boot',
                        gql: './src/gql',
                        components: './src/components',
                        cache: './src/cache',
                        context: './src/context',
                        hooks: './src/hooks',
                        navigation: './src/navigation',
                        screens: './src/screens',
                        utils: './src/utils',
                        styles: './src/styles',
                        theme: './src/theme',
                        i18n: './src/i18n',
                        config: './src/config',
                        store: './src/store',
                    },
                },
            ],
        ],
    };
};
