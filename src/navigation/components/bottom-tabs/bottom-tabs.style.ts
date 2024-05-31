import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { Theme } from 'theme';

type BottomSheetStyleProps = {
    safeAreaInsets: EdgeInsets;
    theme: Theme;
};

export const useStyles = ({ safeAreaInsets, theme }: BottomSheetStyleProps) =>
    StyleSheet.create({
        root: {
            paddingBottom: safeAreaInsets.bottom + 10,
            backgroundColor: theme.colors.bottomBarBackground,
            elevation: 8,
            height: 80 + safeAreaInsets.bottom,
            zIndex: 0,
        },
    });
