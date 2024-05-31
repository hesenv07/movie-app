import { BackButton, View } from 'components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import Logo from './logo';

type HeaderProps = {
    back?: boolean;
    title?: string;
    status?: boolean;
    isLogo?: boolean;
};
export const Header: React.FC<HeaderProps> = ({ back, title, status,isLogo }) => {
    return  <SafeAreaView edges={['top']} style={{ backgroundColor: '#FFFFFF' }}>
            <StatusBar style={`${status ? 'dark' : 'light'}`} />
            <View
                style={{
                    marginTop: 10,
                    height: 45,
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 8,
                }}
            >
                {back && <BackButton />}
                {isLogo && <Logo/>}
                <Text style={{ fontSize: 18,marginLeft:10 }}>{title}</Text>
            </View>
        </SafeAreaView>
    
};
