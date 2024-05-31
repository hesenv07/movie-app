import { useTheme } from 'context/ThemeContext';
import { TabProps } from 'navigation/param-list.types';
import React, { Fragment, useCallback, useState } from 'react';
import { View } from 'react-native';
import { Surface } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { BottomTabItem } from './bottom-tab-item';
import { BottomTabPopover } from './bottom-tab-popover';
import { useStyles } from './bottom-tabs.style';

export const BottomTabs: React.FC<TabProps> = ({ navigation, state, descriptors }) => {
    const safeAreaInsets = useSafeAreaInsets();
    const { theme } = useTheme();
    const styles = useStyles({ theme, safeAreaInsets });

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

    return (
        <>
            <BottomTabPopover open={menuOpen} onClose={toggleMenu} navigation={navigation} />
            <Surface style={styles.root}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    {state.routes.map((route, index) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? (options.tabBarLabel as string)
                                : options.title !== undefined
                                ? options.title
                                : route.name;

                        const isFocused = state.index === index;

                        const icon =
                            options.tabBarIcon !== undefined
                                ? options.tabBarIcon({
                                      size: moderateScale(20),
                                      color: isFocused ? theme.colors.primary : theme.colors.textSecondary,
                                      focused: isFocused,
                                  })
                                : null;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate({ ...route, merge: true });
                            }
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };
                        return (
                            <Fragment key={route.key}>
                                <BottomTabItem
                                    icon={icon}
                                    label={label}
                                    onPress={onPress}
                                    onLongPress={onLongPress}
                                    selected={isFocused}
                                />
                            </Fragment>
                        );
                    })}
                </View>
            </Surface>
        </>
    );
};
