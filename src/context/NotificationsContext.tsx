/* eslint-disable @typescript-eslint/no-empty-function */
import { useTheme } from 'context/ThemeContext';
import React, { createContext, ReactNode, useContext } from 'react';
import { Colors, Snackbar } from 'react-native-paper';
import { SnackbarProps } from 'react-native-paper/lib/typescript/components/Snackbar';
import { Text } from '../components/text';
export type SnackbarType = 'success' | 'error' | 'info' | 'warning' | 'default';

type NotifyType = {
    visible: boolean;
    duration: number;
    message: string;
    type: SnackbarType;
    action?: SnackbarProps['action'];
};

type NotifyInputType = {
    duration?: number;
    message: string;
    type?: SnackbarType;
    action?: SnackbarProps['action'];
};

type NotificationsContextProps = {
    notify: ({ duration, message, type, action }: NotifyInputType) => void;
};

const NotificationsContext = createContext<NotificationsContextProps>({
    notify: () => {},
});
export const useNotifications = (): NotificationsContextProps =>
    useContext<NotificationsContextProps>(NotificationsContext);

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { theme } = useTheme();

    const styles: {
        [key: string]: {
            backgroundColor?: string;
            color?: string;
            icon?: any;
            borderLeftColor?: any;
            borderLeftWidth?: any;
        };
    } = {
        default: {
            backgroundColor: 'rgb(37, 37, 38)',
            color: theme.colors.primary,
            icon: null,
        },
        success: {
            backgroundColor: '#EAF9DE',
            color: '#475569',
            icon: 'check-circle',
            borderLeftColor: theme.colors.success,
            borderLeftWidth: 7,
        },
        error: {
            backgroundColor: 'rgb(255, 204, 204)',
            color: '#475569',
            icon: 'x-circle',
            borderLeftColor: theme.colors.error,
            borderLeftWidth: 7,
        },
        info: {
            backgroundColor: Colors.lightBlue500,
            color: '#fff',
            icon: 'info',
            borderLeftColor: 'white',
            borderLeftWidth: 7,
        },
        warning: {
            backgroundColor: theme.colors.warning,
            color: '#fff',
            icon: 'alert-triangle',
        },
        text: {
            color: '#475569',
        },
    };

    const DEFAULT_SNACK_STATE: NotifyType = {
        type: 'default',
        visible: false,
        duration: 3000,
        message: '',
        action: undefined,
    };

    const [snack, setSnackState] = React.useState(DEFAULT_SNACK_STATE);

    const notify = ({ type, duration, message, action }: NotifyInputType): void => {
        const newState: NotifyType = {
            type: type || 'default',
            visible: true,
            duration: duration || 1500,
            message,
            action,
        };
        setSnackState(newState);
    };

    const onDismiss = (): void => {
        setSnackState((prev) => ({
            ...prev,
            visible: false,
        }));
    };

    return (
        <NotificationsContext.Provider value={{ notify }}>
            {children}
            <Snackbar
                visible={snack.visible}
                duration={snack.duration}
                wrapperStyle={{ top: 50 }}
                style={{
                    backgroundColor: styles[snack.type].backgroundColor,
                    borderLeftWidth: 7,
                    borderLeftColor: styles[snack.type].borderLeftColor,
                    marginLeft: 25,
                    marginRight: 25,
                }}
                onDismiss={onDismiss}
                action={snack.action ? { ...snack.action, color: styles[snack.type].color } : undefined}
            >
                <Text ml={1} ph={2} style={[styles.text, { flexShrink: 1, flexGrow: 1, flexWrap: 'wrap' }]}>
                    {snack.message}
                </Text>
            </Snackbar>
        </NotificationsContext.Provider>
    );
};
