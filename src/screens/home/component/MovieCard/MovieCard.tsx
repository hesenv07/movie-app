import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

import { MovieProps } from "screens/home/types";

import { HomeStackScreenProps } from "navigation/param-list.types";

interface MovieCardProps {
    size?: number;
    data: MovieProps,
    navigation: HomeStackScreenProps<'Home'>['navigation'];
}

export const MovieCard: React.FC<MovieCardProps> = ({ size = 1, data, navigation }) => {
    return (<TouchableOpacity onPress={() => navigation?.navigate('MovieDetais', { id: data.id, title: data.title })} activeOpacity={0.9}>
        <ImageBackground
            style={{ ...styles.container, width: 220 * size, height: 320 * size }}
            imageStyle={{ borderRadius: 12 }}
            source={{ uri: data.image }}
        >
        </ImageBackground>
    </TouchableOpacity>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 8
    },
    
});
