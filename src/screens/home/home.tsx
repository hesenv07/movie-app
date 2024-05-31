import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, ScrollView } from 'react-native';

import { ActivityIndicator } from 'react-native-paper';

import { Text, View } from 'components';
import { processRawData } from 'utils/entity';
import { useTheme } from 'context/ThemeContext';
import { MovieCard, MovieList } from './component';
import { MovieCategory, fetchCategory, fetchMoviesWithCategory } from './api';
import { useNotifications } from 'context/NotificationsContext';
import { HomeStackScreenProps } from 'navigation/param-list.types';

import { CategoryMovie, MovieProps } from './types';

export const HomeScreen: React.FC<HomeStackScreenProps<'Home'>> = ({ navigation }) => {

    const { notify } = useNotifications();
    const { theme } = useTheme()

    const [nowPlaying, setNowPlaying] = useState<MovieProps[]>([] as MovieProps[]);
    const [upcoming, setUpcoming] = useState<MovieProps[]>([] as MovieProps[]);
    const [popular, setPopular] = useState<MovieProps[]>([] as MovieProps[]);
    const [category, setCategory] = useState<CategoryMovie[]>([] as CategoryMovie[]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchMovies = async () => {

            try {
                const [nowPlayingMovies, upcomingMovies, topRatedMovies, category] = await Promise.all([
                    fetchMoviesWithCategory(MovieCategory.NOW_PLAYING),
                    fetchMoviesWithCategory(MovieCategory.UPCOMING),
                    fetchMoviesWithCategory(MovieCategory.POPULAR),
                    fetchCategory()
                ]);
                setNowPlaying(processRawData(nowPlayingMovies) as MovieProps[]);
                setUpcoming(processRawData(upcomingMovies) as MovieProps[]);
                setPopular(processRawData(topRatedMovies) as MovieProps[])
                setCategory(category);
            } catch (error) {
                if (error instanceof Error) {
                    notify({ type: 'error', message: error.message });
                }
                notify({ type: 'error', message: error.message });
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator animating={true} size='large' color={theme.colors.primary} />
        </View>
    }

    return <ScrollView style={styles.container}>
        <FlatList
            data={nowPlaying}
            horizontal
            renderItem={({ item }) => (
                <MovieCard
                    navigation={navigation}
                    data={item}
                />
            )}
        />
        <View style={styles.category}>
            <Text style={styles.text} >Upcoming Movies</Text>
            <FlatList
                data={popular}
                horizontal
                renderItem={({ item }) => {
                    const categoryName = category.find((cat) => cat.id == item?.genre_ids[0])?.name;
                    return (
                        <MovieList
                            hasNavigation={true}
                            navigation={navigation}
                            data={item}
                            categoryName={categoryName}
                        />
                    )
                }}
            />
        </View>
        <View style={styles.category}>
            <Text style={styles.text} >Popular Movies</Text>
            <FlatList
                data={upcoming}
                horizontal
                renderItem={({ item }) => {
                    const categoryName = category.find((cat) => cat.id == item?.genre_ids[0])?.name;
                    return (
                        <MovieList
                            hasNavigation={true}
                            navigation={navigation}
                            data={item}
                            categoryName={categoryName}
                        />
                    )
                }}
            />
        </View>

    </ScrollView>

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,

    },
    category: {
        marginVertical: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 10
    }
});
