import React, { useCallback, useEffect, useState } from 'react';

import * as Font from 'expo-font';

import { Navigation } from 'navigation';
import * as SplashScreen from 'expo-splash-screen';
import { Provider as PaperProvider } from 'react-native-paper';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { NotificationsProvider } from 'context/NotificationsContext';
import { useTheme } from 'context/ThemeContext';

import 'i18n';

const cacheFonts = () => {
    return Font.loadAsync({
        'Poppins-Thin': require('assets/fonts/Poppins-Thin.ttf'),
        'Poppins-Light': require('assets/fonts/Poppins-Light.ttf'),
        'Poppins-Regular': require('assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Semibold': require('assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('assets/fonts/Poppins-Bold.ttf'),
    });
};

const setUpDependenciesAsync = async () => {
    await Promise.all([cacheFonts()]);
};

const App: React.FC = () => {
    const { theme } = useTheme();
    const [appIsReady, setAppIsReady] = useState(false);
    const [resourcesReady, setResourcesReady] = useState(false);
    
    useEffect(() => {
        (async () => {
            await SplashScreen.preventAutoHideAsync();
            await setUpDependenciesAsync();
            setResourcesReady(true);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (resourcesReady) {
                setAppIsReady(true);
            }
        })();
    }, [resourcesReady]);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
                <NotificationsProvider>
                    <SafeAreaView
                        onLayout={onLayoutRootView}
                        edges={['left', 'right']}
                        style={{
                            flex: 1,
                            backgroundColor: theme.dark ? '#000' : '#fff',
                        }}
                    >
                        <Navigation />
                    </SafeAreaView>
                </NotificationsProvider>
            </PaperProvider>
        </SafeAreaProvider>
    );
};

const ConnectedApp = connectActionSheet(App);

export default ConnectedApp;
