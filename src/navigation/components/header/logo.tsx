import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { useTheme } from 'context/ThemeContext';

const Logo: React.FC = () => {
    const { theme } = useTheme();

  return (
    <View style={styles.container}>
        <Text style={styles.movie}>Movie</Text>
        <Text style={[styles.movie,{color:theme.colors.primary}]}>App</Text>
      </View> 
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

  },
  movie: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Logo;
