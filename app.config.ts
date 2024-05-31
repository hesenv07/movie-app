import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): Partial<ExpoConfig> => {
    return {
        ...config,
        name: 'Movie App',
        slug: 'movie-app',
        extra: {
            eas: {
                projectId: '4f442da3-413e-4f89-a85b-a5e12b68e6c6',
            },
        },
        runtimeVersion: {
            policy: 'appVersion',
        },
    };
};
