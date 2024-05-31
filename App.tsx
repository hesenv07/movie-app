import React from 'react';
import Setup from './src/boot/setup';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const App = (): React.ReactElement => <Setup />;

export default gestureHandlerRootHOC(App);
