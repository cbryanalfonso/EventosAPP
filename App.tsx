import React from 'react';
import { StatusBar } from 'react-native';
import { AppNavigator } from './src/Screens/AppNavigator';

const App = () => {
  return (
    <>
    <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
    <AppNavigator/>
    </>
  );
};

export default App;
