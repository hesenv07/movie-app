
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, Searchbar } from 'react-native-paper';

import { Text, View } from 'components';
import { searchMoviesByTitle } from './api';
import { processRawData } from 'utils/entity';
import { useTheme } from 'context/ThemeContext';
import { useNotifications } from 'context/NotificationsContext';

import { MovieProps } from 'screens/home/types';
import { HomeStackParamList } from 'navigation/param-list.types';
import { debounce } from 'lodash';




export const SearchScreen: React.FC<StackScreenProps<HomeStackParamList, 'MovieDetais'>> = ({ navigation }) => {
    const { notify } = useNotifications();
    const { theme } = useTheme();

    const [search, setSearch] = useState<string>('');
    const [data, setData] = useState<MovieProps[]>([] as MovieProps[]);
    const [loading, setLoading] = useState<boolean>(false);

    const abortControllerRef = useRef<AbortController | null>(null);


    const fetchMovies = async (search: string, signal: AbortSignal) => {
        setLoading(true);
        try {
            const response = await searchMoviesByTitle(search);
            setData(processRawData(response) as MovieProps[]);
        } catch (error) {
            if (error instanceof Error && error.name !== 'AbortError') {
                notify({ type: 'error', message: error.message });
            }
        } finally {
            if (!signal.aborted) {
                setLoading(false);
            }
        }
    };

    const debounceFetchMovies = useCallback(
        debounce((search: string) => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
            const controller = new AbortController();
            abortControllerRef.current = controller;
            fetchMovies(search, controller.signal);
        }, 500),
        []
    );

    useEffect(() => {
        if (search) {
            debounceFetchMovies(search);
        }
    }, [search]);


    const renderItem = ({ item }: { item: MovieProps }) => {
        return <TouchableOpacity onPress={() => navigation.navigate('MovieDetais', { id: item.id, title: item.title })}>
            <View mv={1} flex={1} flexDirection='row' >
                <Image source={{ uri: item.image }} style={{ width: 80, height: 100 }} />
                <View ph={1} mv={1} flex={1}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.title}</Text>
                    <View flex={1} flexDirection='row' alignItems='center' >
                        <AntDesign name="star" size={24} color="#FF8700" />
                        <Text>{item.vote_average}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    };

    return <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View ph={2} mt={2}>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearch}
                value={search}
            />
            {loading ?
                <View mt={5} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <ActivityIndicator animating={true} size='small' color={theme.colors.primary} />
                </View> :
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />}

        </View>
    </SafeAreaView>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'normal'
    }
});
