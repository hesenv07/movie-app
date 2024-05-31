import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'context/ThemeContext';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type BackButtonProps = TouchableOpacityProps & {
    color?: string;
};

export const BackButton: React.FC<BackButtonProps> = ({ color, ...props }) => {
    const { theme } = useTheme();
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.goBack();
            }}
            activeOpacity={0.8}
            {...props}
            style={{ width: 24, height: 24 }}
        >
            <MaterialIcons name="keyboard-backspace" size={24} color={color || theme.colors.text} />
        </TouchableOpacity>
    );
};
