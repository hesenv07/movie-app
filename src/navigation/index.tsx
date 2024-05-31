import React, { useCallback, useMemo } from 'react';

import { Feather } from '@expo/vector-icons';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { enableScreens } from 'react-native-screens';


import HomeScreen from 'screens/home';
import MovieDetailScreen from 'screens/home/movie-detail';
import SearchScreen from 'screens/search';
import { BottomTabs } from './components';
import { Header } from './components/header/header';

import { HomeStackParamList, SearchStackParamList, TabProps } from './param-list.types';

enableScreens();

const Stack = createStackNavigator();

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeScreenStack = () => {
    return (
        <HomeStack.Navigator screenOptions={{ gestureEnabled: false, headerShown: true }} initialRouteName="Home">
            <HomeStack.Screen
                options={{
                    header: () => <Header status isLogo/>,
                }}
                name="Home"
                component={HomeScreen}
            />
            <HomeStack.Screen
                options={({ route }) => ({
                    header: () => <Header status back title={route.params.title} />,
                })}
                name="MovieDetais"
                component={MovieDetailScreen}
            />
        </HomeStack.Navigator>
    );
};


const SearchStack = createStackNavigator<SearchStackParamList>();

const SearchStackScreen = () => {
    return (
        <SearchStack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Search">
            <SearchStack.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    header: () => null,
                }}
            />
        </SearchStack.Navigator>
    );
};

const TabStack = createBottomTabNavigator<any>();

const TabScreenStack = () => {
    const { t } = useTranslation('bottomBar');

    const renderIcon = ({ color, name }: { focused: boolean; color: string; size: number; name: any }) => {
            return <Feather name={name} size={30} color={color} />;
    };


    const screenOptions: any = useMemo(
        () => ({
            header: () => {
                return null;
            },
        }),
        [],
    );
    return (
        <TabStack.Navigator
            screenOptions={screenOptions}
            initialRouteName="Home"
            tabBar={(props) => {
                return <BottomTabs {...(props as BottomTabBarProps as TabProps)} />;
            }}
        >
            <TabStack.Screen
                name="HomeScreenStack"
                component={HomeScreenStack}
                options={{
                    title: t('home'),
                    tabBarIcon: (props) => renderIcon({ name: 'home', ...props }),
                }}
            />
            <TabStack.Screen
                name="SearchStackScreen"
                component={SearchStackScreen}
                options={{
                    title: t('search'),
                    tabBarIcon: (props) => renderIcon({ name: 'search', ...props }),
                }}
            />
        </TabStack.Navigator>
    );
};

export const Navigation: React.FC = () => {

    const renderNavigation = useCallback(() => {
            return <Stack.Screen name="App" component={TabScreenStack} />;
    }, []);

  

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>{renderNavigation()}</Stack.Navigator>
        </NavigationContainer>
    );
};
