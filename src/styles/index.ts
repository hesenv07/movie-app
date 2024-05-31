/* styles.js */
import { useTheme } from 'context/ThemeContext';
import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, BORDER_RADIUS_LARGE, BORDER_RADIUS_MEDIUM, BORDER_RADIUS_ROUND } from 'theme';
import { fonts } from 'theme/fonts';
import { ft, spacing } from 'utils/responsive-utils';

// spacing constants
export const SPACING_XS = spacing(1);
export const SPACING_S = spacing(2);
export const SPACING_M = spacing(3);
export const SPACING_L = spacing(4);
export const SPACING_XL = spacing(5);
export const SPACING_XXL = spacing(7);
export const SPACING_XXXL = spacing(12);

// color constants
export const COLOR_DARK_BLUE = '#10355E';
export const COLOR_THDEMO_RED = '#C8102E';
export const COLOR_THDEMO_BROWN = '#3F2021';
export const COLOR_DREAMCARD_PURPLE = '#29193C';
export const COLOR_DREAMCARD_GREEN = '#4B886A';

// "Link Blue"
export const COLOR_LIGHT_BLUE = '#0D62CD';
export const COLOR_HIGHLIGHT_BLUE = '#EBF4FF';

export const COLOR_DARKER_GREY = '#323335';
export const COLOR_DARK_GREY = '#757575';
export const COLOR_MEDIUM_GREY = '#BBBBBB';
export const COLOR_LIGHT_GREY = '#CECECE';
export const COLOR_LIGHTEST_GREY = '#EBEBEB';
export const COLOR_FULL_WHITE = '#FFFFFF';
export const COLOR_FULL_BLACK = '#FFFFFF';
export const COLOR_OFF_WHITE = '#F9F9F9';
export const COLOR_BIEGE = '#F2F2F2';

// "Completed Text"
export const COLOR_GREEN = '#328731';
export const COLOR_LIGHT_GREEN = '#F4FBF4';
// "Attention Text"
export const COLOR_DARK_YELLOW = '#BB4444';
export const COLOR_LIGHT_YELLOW = '#FCFFD6';
// "Error Text"
export const COLOR_RED = '#BB4444';
export const COLOR_LIGHT_RED = '#F8ECEC';
export const COLOR_MEDIUM_YELLOW = '#966E31';
export const COLOR_THDEMO_ERROR = '#D14545';
// "Border color"
export const COLOR_BORDER_GREY = '#E6E6E6';
// "Tint color"
export const COLOR_TINT_BLUE = '#2F95DC';

// "Whitelabel demo colors"
export const COLOR_WHITELABEL_BLUE = '#7BA0C4';

// font constants

export const FONT_FAMILY_HEAVY = fonts.heavy.fontFamily;
export const FONT_FAMILY_BOLD = fonts.bold.fontFamily;
export const FONT_FAMILY_SEMIBOLD = fonts.semibold.fontFamily;
export const FONT_FAMILY_MEDIUM = fonts.medium.fontFamily;
export const FONT_FAMILY_REGULAR = fonts.regular.fontFamily;
export const FONT_FAMILY_LIGHT = fonts.light.fontFamily;
export const FONT_FAMILY_THIN = fonts.thin.fontFamily;

export const FONT_SIZE_LARGE_TITLE = ft(24);
export const FONT_SIZE_SMALL_TITLE = ft(16);
export const FONT_SIZE_BUTTON = ft(16);

export const LINE_HEIGHT_LARGE_TITLE = ft(34);
export const LINE_HEIGHT_SMALL_TITLE = ft(24);
export const LINE_HEIGHT_BUTTON = ft(24);

export const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        debug: { backgroundColor: '#FF0000', borderWidth: 1, borderColor: '#FF0000' },

        /* ---------------------------------------------------------------- */
        // margin
        m0: { margin: 0 },
        m1: { margin: SPACING_XS },
        m2: { margin: SPACING_S },
        m3: { margin: SPACING_M },
        m4: { margin: SPACING_L },
        m5: { margin: SPACING_XL },
        m6: { margin: SPACING_XXL },
        m7: { margin: SPACING_XXXL },

        // margin-top
        mt0: { marginTop: 0 },
        mt1: { marginTop: SPACING_XS },
        mt2: { marginTop: SPACING_S },
        mt3: { marginTop: SPACING_M },
        mt4: { marginTop: SPACING_L },
        mt5: { marginTop: SPACING_XL },
        mt6: { marginTop: SPACING_XXL },
        mt7: { marginTop: SPACING_XXXL },

        // margin-bottom
        mb0: { marginBottom: 0 },
        mb1: { marginBottom: SPACING_XS },
        mb2: { marginBottom: SPACING_S },
        mb3: { marginBottom: SPACING_M },
        mb4: { marginBottom: SPACING_L },
        mb5: { marginBottom: SPACING_XL },
        mb6: { marginBottom: SPACING_XXL },
        mb7: { marginBottom: SPACING_XXXL },

        // margin-left
        ml0: { marginLeft: 0 },
        ml1: { marginLeft: SPACING_XS },
        ml2: { marginLeft: SPACING_S },
        ml3: { marginLeft: SPACING_M },
        ml4: { marginLeft: SPACING_L },
        ml5: { marginLeft: SPACING_XL },
        ml6: { marginLeft: SPACING_XXL },
        ml7: { marginLeft: SPACING_XXXL },

        // margin-right
        mr0: { marginRight: 0 },
        mr1: { marginRight: SPACING_XS },
        mr2: { marginRight: SPACING_S },
        mr3: { marginRight: SPACING_M },
        mr4: { marginRight: SPACING_L },
        mr5: { marginRight: SPACING_XL },
        mr6: { marginRight: SPACING_XXL },
        mr7: { marginRight: SPACING_XXXL },

        // margin-horizontal
        mh0: { marginHorizontal: 0 },
        mh1: { marginHorizontal: SPACING_XS },
        mh2: { marginHorizontal: SPACING_S },
        mh3: { marginHorizontal: SPACING_M },
        mh4: { marginHorizontal: SPACING_L },
        mh5: { marginHorizontal: SPACING_XL },
        mh6: { marginHorizontal: SPACING_XXL },
        mh7: { marginHorizontal: SPACING_XXXL },

        // margin-vertical
        mv0: { marginVertical: 0 },
        mv1: { marginVertical: SPACING_XS },
        mv2: { marginVertical: SPACING_S },
        mv3: { marginVertical: SPACING_M },
        mv4: { marginVertical: SPACING_L },
        mv5: { marginVertical: SPACING_XL },
        mv6: { marginVertical: SPACING_XXL },
        mv7: { marginVertical: SPACING_XXXL },

        // padding
        p0: { padding: 0 },
        p1: { padding: SPACING_XS },
        p2: { padding: SPACING_S },
        p3: { padding: SPACING_M },
        p4: { padding: SPACING_L },
        p5: { padding: SPACING_XL },
        p6: { padding: SPACING_XXL },
        p7: { padding: SPACING_XXXL },

        // padding-top
        pt0: { paddingTop: 0 },
        pt1: { paddingTop: SPACING_XS },
        pt2: { paddingTop: SPACING_S },
        pt3: { paddingTop: SPACING_M },
        pt4: { paddingTop: SPACING_L },
        pt5: { paddingTop: SPACING_XL },
        pt6: { paddingTop: SPACING_XXL },
        pt7: { paddingTop: SPACING_XXXL },

        // padding-bottom
        pb0: { paddingBottom: 0 },
        pb1: { paddingBottom: SPACING_XS },
        pb2: { paddingBottom: SPACING_S },
        pb3: { paddingBottom: SPACING_M },
        pb4: { paddingBottom: SPACING_L },
        pb5: { paddingBottom: SPACING_XL },
        pb6: { paddingBottom: SPACING_XXL },
        pb7: { paddingBottom: SPACING_XXXL },

        // padding-left
        pl0: { paddingLeft: 0 },
        pl1: { paddingLeft: SPACING_XS },
        pl2: { paddingLeft: SPACING_S },
        pl3: { paddingLeft: SPACING_M },
        pl4: { paddingLeft: SPACING_L },
        pl5: { paddingLeft: SPACING_XL },
        pl6: { paddingLeft: SPACING_XXL },
        pl7: { paddingLeft: SPACING_XXXL },

        // padding-right
        pr0: { paddingRight: 0 },
        pr1: { paddingRight: SPACING_XS },
        pr2: { paddingRight: SPACING_S },
        pr3: { paddingRight: SPACING_M },
        pr4: { paddingRight: SPACING_L },
        pr5: { paddingRight: SPACING_XL },
        pr6: { paddingRight: SPACING_XXL },
        pr7: { paddingRight: SPACING_XXXL },

        // padding-horizontal
        ph0: { paddingHorizontal: 0 },
        ph1: { paddingHorizontal: SPACING_XS },
        ph2: { paddingHorizontal: SPACING_S },
        ph3: { paddingHorizontal: SPACING_M },
        ph4: { paddingHorizontal: SPACING_L },
        ph5: { paddingHorizontal: SPACING_XL },
        ph6: { paddingHorizontal: SPACING_XXL },
        ph7: { paddingHorizontal: SPACING_XXXL },

        // padding-vertical
        pv0: { paddingVertical: 0 },
        pv1: { paddingVertical: SPACING_XS },
        pv2: { paddingVertical: SPACING_S },
        pv3: { paddingVertical: SPACING_M },
        pv4: { paddingVertical: SPACING_L },
        pv5: { paddingVertical: SPACING_XL },
        pv6: { paddingVertical: SPACING_XXL },
        pv7: { paddingVertical: SPACING_XXXL },

        /* ---------------------------------------------------------------- */

        h100: { height: '100%' },
        w100: { width: '100%' },

        // position
        absolute: { position: 'absolute' },
        relative: { position: 'relative' },

        // flex
        flex1: { flex: 1 },
        flex2: { flex: 2 },
        flex3: { flex: 3 },

        // flex direction
        column: { flexDirection: 'column' },
        row: { flexDirection: 'row' },

        // flex grow
        grow0: { flexGrow: 0 },
        shrink0: { flexShrink: 0 },
        grow1: { flexGrow: 1 },
        shrink1: { flexShrink: 1 },

        // flex display
        flex: { display: 'flex' },
        wrap: { flexWrap: 'wrap' },
        nowrap: { flexWrap: 'nowrap' },
        reversewrap: { flexWrap: 'wrap-reverse' },

        // justify content
        justify_start: { justifyContent: 'flex-start' },
        justify_end: { justifyContent: 'flex-end' },
        justify_center: { justifyContent: 'center' },
        justify_between: { justifyContent: 'space-between' },
        justify_around: { justifyContent: 'space-around' },
        justify_evenly: { justifyContent: 'space-evenly' },

        // align items
        align_stretch: { alignItems: 'stretch' },
        align_center: { alignItems: 'center' },
        align_start: { alignItems: 'flex-start' },
        align_end: { alignItems: 'flex-end' },

        // align self
        self_a_stretch: { alignSelf: 'stretch' },
        self_a_center: { alignSelf: 'center' },
        self_a_start: { alignSelf: 'flex-start' },
        self_a_end: { alignSelf: 'flex-end' },

        // text align
        text_left: { textAlign: 'left' },
        text_right: { textAlign: 'right' },
        text_center: { textAlign: 'center' },
        text_justify: { textAlign: 'justify' },

        // color
        primary: { color: theme.colors.primary },
        accent: { color: theme.colors.accent },
        error: { color: theme.colors.error },
        success: { color: theme.colors.success },
        warning: { color: theme.colors.warning },
        textPrimary: { color: theme.colors.text },
        textSecondary: { color: theme.colors.textSecondary },
        textDisabled: { color: theme.colors.gray },
        white: { color: COLOR_FULL_WHITE },
        black: { color: COLOR_FULL_BLACK },
        // background color
        bg_primary: { backgroundColor: theme.colors.primary },
        bg_primary_transparent: { backgroundColor: theme.colors.primaryTransparent },
        bg_accent: { backgroundColor: theme.colors.accent },
        bg_error: { backgroundColor: theme.colors.error },
        bg_error_transparent: { backgroundColor: theme.colors.errorTransparent },
        bg_success: { backgroundColor: theme.colors.success },
        bg_success_transparent: { backgroundColor: theme.colors.successTransparent },
        bg_success_dark: { backgroundColor: theme.colors.successDark },
        bg_success_dark_transparent: { backgroundColor: theme.colors.successDarkTransparent },
        bg_warning: { backgroundColor: theme.colors.warning },
        bg_warning_transparent: { backgroundColor: theme.colors.warningTransparent },
        bg_darkened: { backgroundColor: theme.colors.darkenedBackground },
        bg_default: { backgroundColor: theme.colors.background },
        bg_transparent: { backgroundColor: 'transparent' },
        bg_white: { backgroundColor: COLOR_FULL_WHITE },
        bg_black: { backgroundColor: COLOR_FULL_BLACK },
        // opacity
        o_100: { opacity: 1 },
        o_90: { opacity: 0.9 },
        o_80: { opacity: 0.8 },
        // border
        border_grey: {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.colors.outline,
            borderRadius: BORDER_RADIUS,
        },
        bottom_border_grey: {
            borderBottomWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.colors.outline,
        },
        top_border_grey: {
            borderTopWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.colors.outline,
        },
        // rounded corners
        rounded: {
            borderRadius: BORDER_RADIUS,
        },
        rounded_medium: {
            borderRadius: BORDER_RADIUS_MEDIUM,
        },
        rounded_large: {
            borderRadius: BORDER_RADIUS_LARGE,
        },
        rounded_circle: {
            borderRadius: BORDER_RADIUS_ROUND,
        },
        contain: {
            resizeMode: 'contain',
        },
        cover: {
            resizeMode: 'cover',
        },
        // text
        font_large_title: {
            fontFamily: FONT_FAMILY_HEAVY,
            fontSize: FONT_SIZE_LARGE_TITLE,
            lineHeight: LINE_HEIGHT_LARGE_TITLE,
        },
        font_small_title: {
            fontFamily: FONT_FAMILY_BOLD,
            fontSize: FONT_SIZE_LARGE_TITLE,
            lineHeight: LINE_HEIGHT_LARGE_TITLE,
        },
        font_button_default: {
            fontFamily: FONT_FAMILY_BOLD,
            lineHeight: LINE_HEIGHT_BUTTON,
            fontSize: FONT_SIZE_BUTTON,
        },
        font_bold: {
            fontFamily: FONT_FAMILY_BOLD,
        },

        FABRight: {
            position: 'absolute',
            margin: SPACING_S,
            right: 0,
            bottom: 0,
        },
        FABLeft: {
            position: 'absolute',
            margin: SPACING_S,
            left: 0,
            bottom: 0,
        },
    });
};
