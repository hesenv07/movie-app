import { Text } from 'components';
import { useTheme } from 'context/ThemeContext';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

type BottomTabItemProps = {
    selected?: boolean;
    icon: any;
    label: string;
    disabled?: boolean | null;
    onPress: () => void;
    onLongPress: () => void;
};

export const BottomTabItem: React.FC<BottomTabItemProps> = ({ selected, icon, label, onPress, onLongPress }) => {
    const { theme } = useTheme();
    const scale = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: withTiming(scale.value, { duration: 100 }) }],
        };
    });

    useEffect(() => {
        scale.value = selected ? 1 : 0.75;
    }, [selected]);

    const ITEM_COLOR = selected ? theme.colors.primary : theme.colors.textSecondary;

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={styles.root}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <View style={styles.tabs}>
                <Animated.View style={[styles.content, animatedStyle]}>{icon}</Animated.View>
                <Text fontWeight="semibold" fontSize={18} pl={0.5} color={ITEM_COLOR}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    tabs: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
});
