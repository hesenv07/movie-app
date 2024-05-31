import { configureFonts } from 'react-native-paper';
import { Fonts as DefaultFonts, Font } from 'react-native-paper/lib/typescript/types';

export interface Fonts extends DefaultFonts {
    semibold: Font;
    bold: Font;
    heavy: Font;
}

const defaultFonts: Fonts = {
    regular: {
        fontFamily: 'Poppins-Regular',
        fontWeight: 'normal',
    },
    medium: {
        fontFamily: 'Poppins-Medium',
        fontWeight: 'normal',
    },
    light: {
        fontFamily: 'Poppins-Light',
        fontWeight: 'normal',
    },
    thin: {
        fontFamily: 'Poppins-Thin',
        fontWeight: 'normal',
    },
    semibold: {
        fontFamily: 'Poppins-Semibold',
        fontWeight: 'normal',
    },
    bold: {
        fontFamily: 'Poppins-Bold',
        fontWeight: 'normal',
    },
    heavy: {
        fontFamily: 'Poppins-Regular',
        fontWeight: 'normal',
    },
};

type FontConfigProps = {
    default: Fonts;
    android: Fonts;
    ios: Fonts;
    web: Fonts;
};

const fontConfig: FontConfigProps = {
    default: defaultFonts,
    android: defaultFonts,
    ios: defaultFonts,
    web: defaultFonts,
};

export const fonts = configureFonts(fontConfig);
