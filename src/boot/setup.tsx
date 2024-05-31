import React from 'react';
import { Text, TextInput } from 'react-native';

import { enableScreens } from 'react-native-screens';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { ThemeProvider } from 'context/ThemeContext';

import App from './app';

enableScreens();

(Text as any).defaultProps = (Text as any).defaultProps || {};
(Text as any).defaultProps.allowFontScaling = false;

(TextInput as any).defaultProps = (TextInput as any).defaultProps || {};
(TextInput as any).defaultProps.allowFontScaling = false;

const Setup: React.FC = () => {
    return (
        <ActionSheetProvider>
            <ThemeProvider>
                    <App />
            </ThemeProvider>
        </ActionSheetProvider>
    );
};

export default Setup;
