import React, { createContext, ReactNode, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { PaperLightTheme, Theme } from 'theme';

export type ThemeType = 'dark' | 'light';

type ThemeContextProps = {
    theme: Theme;
    themeType: ThemeType;
};

const ThemeContext = createContext<ThemeContextProps>({
    theme: PaperLightTheme,
    themeType: 'light',
});

export const useTheme = (): ThemeContextProps => useContext<ThemeContextProps>(ThemeContext);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const colorScheme = useColorScheme();

    const isDarkMode = colorScheme === 'dark';

    return (
        <ThemeContext.Provider
            value={{
                theme: isDarkMode ? PaperLightTheme : PaperLightTheme,
                themeType: 'light',
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
