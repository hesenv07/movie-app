import { DarkTheme, DefaultTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import { alpha, darken, lighten } from './color-manipulator';

export interface StateColors {
    success: string;
    successTransparent: string;
    successDark: string;
    successDarkTransparent: string;
    error: string;
    errorTransparent: string;
    warning: string;
    warningTransparent: string;
}

export interface ColorPalette extends StateColors {
    primary: string;
    primaryTransparent: string;
    primaryLight: string;
    primaryLightTransparent: string;
    accent: string;
    gray: string;
}

export interface ThemeSpecificColors {
    placeholder: string;
    background: string;
    darkenedBackground: string;
    text: string;
    textSecondary: string;
    disabled: string;
    disabledInputBackground: string;
    divider: string;
    bottomBarBackground: string;
    outline: string;
}

export type ThemeColors = Theme['colors'] & ColorPalette & ThemeSpecificColors;

export const Colors: ColorPalette = {
    primary: '#C25FFF',
    primaryTransparent: alpha('rgb(59,67,242)', 0.15),
    primaryLight: 'rgb(87, 94, 255)',
    primaryLightTransparent: alpha('rgb(87, 94, 255)', 0.15),
    accent: 'rgb(255, 190, 43)',
    success: 'rgb(11,216,133)',
    successTransparent: alpha('rgb(11,216,133)', 0.15),
    successDark: 'rgb(0,138,0)',
    successDarkTransparent: alpha('rgb(0,138,0)', 0.15),
    error: 'rgb(253, 97, 80)',
    errorTransparent: alpha('rgb(253, 97, 80)', 0.15),
    warning: 'rgb(255,175,60)',
    warningTransparent: alpha('rgb(255,175,60)', 0.15),
    gray: 'rgb(163,165,169)',
};

export const ColorsDark: ThemeColors = {
    ...DarkTheme.colors,
    ...Colors,
    background: darken(DarkTheme.colors.surface, 0.6),
    darkenedBackground: lighten('#000', 0.05),
    placeholder: 'rgb(92,90,86)',
    disabled: 'rgba(255, 255, 255, 0.1)',
    disabledInputBackground: 'rgba(36,36,36,0.3)',
    divider: 'rgba(150,150,150, 0.1)',
    text: '#fff',
    textSecondary: 'rgb(132,132,132)',
    bottomBarBackground: darken(DarkTheme.colors.surface, 0.4),
    outline: 'rgb(35, 37, 37)',
};

export const ColorsLight: ThemeColors = {
    ...DefaultTheme.colors,
    ...Colors,
    background: '#fff',
    darkenedBackground: darken('#fff', 0.03),
    placeholder: 'rgb(160, 163, 189)',
    disabled: 'rgba(0, 0, 0, 0.1)',
    disabledInputBackground: 'rgba(232,232,232,0.3)',
    divider: 'rgba(209,210,212, 0.15)',
    text: '#191e29',
    textSecondary: 'rgb(112,112,112)',
    bottomBarBackground: '#fff',
    outline: 'rgb(240, 238, 238)',
};
