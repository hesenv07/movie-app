import React, { useEffect } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import { ActivityIndicator } from 'react-native-paper';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { styles } from './icon-button.style';

type IconButtonProps = GenericTouchableProps & {
    style?: StyleProp<ViewStyle>;
    spinnerStyle?: StyleProp<ViewStyle>;
    spinnerColor?: string;
    icon: React.ReactNode;
    loading?: boolean;
    activeOpacity?: number;
};

export const IconButton: React.FC<IconButtonProps> = ({
    style,
    spinnerStyle,
    spinnerColor = '#fff',
    icon,
    loading,
    disabled,
    activeOpacity = 0.7,
    ...props
}) => {
    const isDisabled = useSharedValue(0);

    const disabledStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(interpolate(isDisabled.value, [0, 1], [1, 0.7]), {
                duration: 400,
                easing: Easing.inOut(Easing.sin),
            }),
        };
    });

    useEffect(() => {
        if (disabled) {
            isDisabled.value = 1;
        } else {
            isDisabled.value = 0;
        }
    }, [disabled]);

    return (
        <TouchableOpacity style={styles.touchable} disabled={disabled} activeOpacity={activeOpacity} {...props}>
            <Animated.View style={[styles.root, style, disabledStyle]}>
                {loading ? (
                    <ActivityIndicator style={[styles.spinner, spinnerStyle]} color={spinnerColor} animating />
                ) : (
                    icon
                )}
            </Animated.View>
        </TouchableOpacity>
    );
};
