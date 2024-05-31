import { useTheme } from 'context/ThemeContext';
import React, { useCallback } from 'react';
import { TextProps as RNTextProps, TextStyle } from 'react-native';
import { Text as RNPText } from 'react-native-paper';
import { ft, spacing } from 'utils/responsive-utils';

const BASE_FONT_SIZE = 18;

type FontWeight = 'thin' | 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'heavy';

type TextProps = RNTextProps & {
    fontSize?: number;
    fontWeight?: FontWeight;
    lineHeight?: number;
    secondary?: boolean;
    textAlign?: TextStyle['textAlign'];
    letterSpacing?: TextStyle['letterSpacing'];
    textTransform?: TextStyle['textTransform'];
    color?: string;
    m?: number;
    mb?: number;
    mt?: number;
    mr?: number;
    ml?: number;
    mh?: number;
    mv?: number;
    p?: number;
    pb?: number;
    pt?: number;
    pr?: number;
    pl?: number;
    ph?: number;
    pv?: number;
    children?: React.ReactNode;
};

const TextComponent: React.FC<TextProps> = ({
    children,
    style,
    fontSize,
    fontWeight = 'regular',
    lineHeight,
    letterSpacing,
    textTransform,
    secondary,
    textAlign,
    color,
    m,
    mb,
    mt,
    mr,
    ml,
    mh,
    mv,
    p,
    pb,
    pt,
    pr,
    pl,
    ph,
    pv,
    ...props
}) => {
    const { theme } = useTheme();

    const fontFamilyMap: { [key in FontWeight]: TextStyle['fontFamily'] } = {
        thin: theme.fonts.thin.fontFamily,
        light: theme.fonts.light.fontFamily,
        regular: theme.fonts.regular.fontFamily,
        medium: theme.fonts.medium.fontFamily,
        semibold: theme.fonts.semibold.fontFamily,
        bold: theme.fonts.bold.fontFamily,
        heavy: theme.fonts.heavy.fontFamily,
    };

    const fontFamily = fontFamilyMap[fontWeight];

    const calculateLineHeight = useCallback(() => {
        if (lineHeight) {
            return lineHeight;
        }
        return ft(fontSize || BASE_FONT_SIZE) * 1.5;
    }, [lineHeight, fontSize]);

    return (
        <RNPText
            style={[
                {
                    fontSize: ft(fontSize || BASE_FONT_SIZE),
                    fontFamily,
                    lineHeight: calculateLineHeight(),
                    textAlign,
                    color: secondary ? theme.colors.textSecondary : color || theme.colors.text,
                    letterSpacing: letterSpacing,
                    textTransform,
                    margin: m ? spacing(m) : undefined,
                    marginHorizontal: mh ? spacing(mh) : undefined,
                    marginVertical: mv ? spacing(mv) : undefined,
                    marginBottom: mb ? spacing(mb) : undefined,
                    marginTop: mt ? spacing(mt) : undefined,
                    marginRight: mr ? spacing(mr) : undefined,
                    marginLeft: ml ? spacing(ml) : undefined,
                    padding: p ? spacing(p) : undefined,
                    paddingHorizontal: ph ? spacing(ph) : undefined,
                    paddingVertical: pv ? spacing(pv) : undefined,
                    paddingBottom: pb ? spacing(pb) : undefined,
                    paddingTop: pt ? spacing(pt) : undefined,
                    paddingRight: pr ? spacing(pr) : undefined,
                    paddingLeft: pl ? spacing(pl) : undefined,
                },
                style,
            ]}
            {...props}
        >
            {children}
        </RNPText>
    );
};

export const Text = React.memo(TextComponent);
