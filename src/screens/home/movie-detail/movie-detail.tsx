import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper';

import { Text, View } from 'components';
import { MovieList } from '../component';
import { processRawData } from 'utils/entity';
import { useTheme } from 'context/ThemeContext';
import { fetchMovieCast, fetchMovieDetails } from './api';
import { useNotifications } from 'context/NotificationsContext';

import { MovieProps } from '../types';
import { CastMember, RowCastMember } from './types';
import { HomeStackScreenProps } from 'navigation/param-list.types';

import { TMDB_IMAGE_BASE_URL } from 'config';

export const MovieDetailScreen: React.FC<HomeStackScreenProps<'MovieDetais'>> = ({ route }) => {
    const { id } = route.params;
    const { notify } = useNotifications();
    const { theme } = useTheme()

    const [data, setData] = useState<MovieProps>({} as MovieProps);
    const [cast, setCast] = useState<CastMember[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const [movie, cast] = await Promise.all([
                    fetchMovieDetails(id),
                    fetchMovieCast(id),
                ]);                
                setData(processRawData(movie) as MovieProps);                                
                const castData=cast.map((item:RowCastMember)=>{
                    return {
                        title:item.name,
                        id:item.id,
                        image:`${TMDB_IMAGE_BASE_URL}/w500${item.profile_path}`,
                        genre_ids:item.gender
                    }
                })
                setCast(castData);
            } catch (error) {
                if (error instanceof Error) {
                    notify({ type: 'error', message: error.message });
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [id]);

    if (loading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator animating={true} size='large' color={theme.colors.primary} />
        </View>
    }

    return (<ScrollView style={styles.container}>
        <Image
            style={{ ...styles.image }}
            source={{ uri: data?.image }}
        />
        <View flex={1} alignItems='center' flexDirection='row' pv={1}>
            <Text pr={0.2} style={styles.title}>{data.title}</Text>
            <View flex={1} flexDirection='row' alignItems='center' >
                <AntDesign name="star" size={24} color="#FF8700" />
                <Text>{data.vote_average}</Text>
            </View>
        </View>
        <View>
            <Text style={styles.title}>Overview</Text>
            <Text fontSize={16} mv={1}>{data.overview}</Text>
        </View>
        <View style={styles.category}>
            <Text style={styles.text} >Popular Movies</Text>
            <FlatList
                data={cast}
                horizontal
                renderItem={({ item }) => (
                    <MovieList
                        hasNavigation={false}
                        data={item}
                    />
                )}
            />
        </View>
    </ScrollView>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 12,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
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