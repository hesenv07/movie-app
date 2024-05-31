import { Text, View } from 'components';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useStyles } from 'styles';
import { spacing } from 'utils/responsive-utils';

export const BottomTabPopoverItem: React.FC<{
    title: string;
    onPress: () => void;
    totalItems: number;
    index: number;
}> = ({ title, onPress, totalItems, index }) => {
    const s = useStyles();

    const ANIMATION_EXTRA_DELAY = index * 100;
    const ENTER_ANIMATION_DELAY = 350 + ANIMATION_EXTRA_DELAY;
    const EXIT_ANIMATION_DELAY = totalItems * 50 - ANIMATION_EXTRA_DELAY;

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={1}>
            <Animated.View
                entering={FadeIn.delay(ENTER_ANIMATION_DELAY)}
                exiting={FadeOut.delay(EXIT_ANIMATION_DELAY)}
                style={[s.row, s.align_center, s.ph1, { paddingVertical: spacing(1) }]}
            >
                <View style={s.flex1}>
                    <Text fontSize={24} fontWeight="regular" color="black">
                        {title}
                    </Text>
                </View>
            </Animated.View>
        </TouchableOpacity>
    );
};
