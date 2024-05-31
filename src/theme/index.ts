import { ViewStyle } from 'react-native';
import { DarkTheme, DefaultTheme } from 'react-native-paper';
import { Theme as RNPTheme } from 'react-native-paper/lib/typescript/types';
import { ColorsDark, ColorsLight, ThemeColors } from './colors';
import { fonts, Fonts } from './fonts';

export const SPACING = 8;
export const BORDER_RADIUS = 12;
export const BORDER_RADIUS_MEDIUM = 16;
export const BORDER_RADIUS_LARGE = 20;
export const BORDER_RADIUS_ROUND = 50;

type Shadow = {
    shadowColor: ViewStyle['shadowColor'];
    shadowOffset: ViewStyle['shadowOffset'];
    shadowOpacity: ViewStyle['shadowOpacity'];
    shadowRadius: ViewStyle['shadowRadius'];
    elevation: ViewStyle['elevation'];
};

export interface Theme extends RNPTheme {
    colors: ThemeColors;
    fonts: Fonts;
    shadows: {
        card: Shadow;
    };
}

type SharedThemeProps = { fonts: Fonts; roundness: Theme['roundness'] };

export const SharedThemeProps: SharedThemeProps = {
    fonts,
    roundness: BORDER_RADIUS,
};

export const PaperLightTheme: Theme = {
    ...DefaultTheme,
    ...SharedThemeProps,
    colors: ColorsLight,
    shadows: {
        card: {
            shadowColor: '#999',
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
        },
    },
};

export const PaperDarkTheme: Theme = {
    ...DarkTheme,
    ...SharedThemeProps,
    colors: ColorsDark,
    shadows: {
        card: {
            shadowColor: '#111',
            shadowOffset: {
                width: 0,
                height: 0,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
        },
    },
};
