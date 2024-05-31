import { Fonts } from './fonts';

declare module 'react-native-paper' {
    export function configureFonts(config?: {
        [platform in PlatformOSType | 'default']?: Fonts;
    }): Fonts;
}
