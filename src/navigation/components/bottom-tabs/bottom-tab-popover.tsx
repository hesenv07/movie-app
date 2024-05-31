import { View } from 'components';
import { useTheme } from 'context/ThemeContext';
import { DrawerNavigationProp } from '@react-navigation/drawer';
// import { DrawerStackParamList } from 'navigation/param-list.types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, { FadeIn, FadeOut, ZoomInEasyDown, ZoomOutEasyDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { spacing } from 'utils/responsive-utils';
import { BottomTabPopoverItem } from './bottom-tab-popover-item';

type BottomTabPopoverProps = {
    open: boolean;
    onClose: () => void;
    navigation: DrawerNavigationProp<any> | any;
};

export const BottomTabPopover: React.FC<BottomTabPopoverProps> = ({ open, onClose, navigation }) => {
    const { t } = useTranslation('bottomBar');
    const { theme } = useTheme();
    const safeAreaInsets = useSafeAreaInsets();

    if (!open) {
        return null;
    }

    const actions = [
        {
            title: t('bottomBuying'),
            onPress: () => navigation.navigate('Tabs', { screen: 'Buying' }),
        },
        {
            title: t('bottomSelling'),

            onPress: () => navigation.navigate('Tabs', { screen: 'SellingStack' }),
        },
    ];

    return (
        <View style={{ ...StyleSheet.absoluteFillObject }} pointerEvents="box-none">
            <TouchableWithoutFeedback onPress={onClose}>
                <Animated.View
                    entering={FadeIn}
                    exiting={FadeOut.delay(400)}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        bottom: safeAreaInsets.bottom + 60,
                        backgroundColor: ' rgba(22, 23, 23, 0.4)',
                        zIndex: 1100,
                    }}
                />
            </TouchableWithoutFeedback>
            <View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    justifyContent: 'flex-end',
                    zIndex: 1200,
                    paddingHorizontal: spacing(2),
                    paddingBottom: safeAreaInsets.bottom + 80 + 16,
                }}
                pointerEvents="box-none"
            >
                <Animated.View
                    entering={ZoomInEasyDown.delay(100)}
                    exiting={ZoomOutEasyDown.delay(200)}
                    style={{
                        backgroundColor: 'white',
                        borderRadius: theme.roundness,
                        padding: spacing(1),
                        paddingBottom: spacing(2),
                    }}
                >
                    {actions.map(({ ...props }, index, self) => (
                        <BottomTabPopoverItem
                            key={index}
                            {...props}
                            onPress={() => {
                                onClose();
                            }}
                            totalItems={self.length}
                            index={index}
                        />
                    ))}
                </Animated.View>
            </View>
        </View>
    );
};
