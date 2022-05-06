import React from 'react';
import { StatusBar } from 'react-native';
import { Inicio } from './src/Screens/Start/Inicio';
import { LogandRegScreen } from './src/Screens/Start/LogandRegScreen';

const App = () => {
  return (
    <>
    <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
    <LogandRegScreen/>
      {/* <Inicio /> */}
    </>
  );
};

export default App;
