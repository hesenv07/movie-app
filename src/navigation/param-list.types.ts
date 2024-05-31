import { BottomTabBarProps, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { NavigationHelpers, TabNavigationState } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type HomeStackParamList = {
    Home: undefined;
    MovieDetais: { id: number,title:string };
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = StackScreenProps<HomeStackParamList, T>;

export type SearchStackParamList = {
    Search: undefined;
};

export type SearchStackScreenProps<T extends keyof SearchStackParamList> = StackScreenProps<SearchStackParamList, T>;


export type TabStackParamList = {
    Home: undefined;
    Search: undefined;
};

export type TabStackScreenProps<T extends keyof TabStackParamList> = BottomTabScreenProps<TabStackParamList, T>;
export type TabProps = Omit<BottomTabBarProps, 'navigation' | 'state'> & {
    navigation: NavigationHelpers<TabStackParamList, BottomTabNavigationEventMap>;
    state: TabNavigationState<TabStackParamList>;
};
