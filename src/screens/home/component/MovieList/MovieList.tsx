import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "components";

import { HomeStackScreenProps } from "navigation/param-list.types";
import { MovieProps } from "screens/home/types";

interface MovieListProps {
    size?: number;
    data: MovieProps,
    hasNavigation?: boolean;
    categoryName?: string;
    navigation?: HomeStackScreenProps<'Home'>['navigation'];
}
export const MovieList: React.FC<MovieListProps> = ({ size = 0.5, data, navigation, hasNavigation, categoryName }) => {

    return (
        <TouchableOpacity onPress={() => hasNavigation ? navigation?.navigate('MovieDetais', { id: data.id, title: data.title }) : null} activeOpacity={0.9}>
            <View style={styles.container}>
                <Image
                    style={{ ...styles.image, width: 220 * size, height: 320 * size }}
                    source={{ uri: data.image }}
                />
                <View style={styles.textContainer}>
                    <Text numberOfLines={1} style={styles.title} ellipsizeMode="tail">{data.title}</Text>
                    {categoryName && <Text mb={1} numberOfLines={1} ellipsizeMode="tail" fontSize={10} color="#92929D" >{categoryName}</Text>}
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 8
    },
    image: {
        flex: 1,
        borderRadius: 12
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 8,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: '#252836',
    },
    title: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
        fontWeight: 'bold',
    }
});
