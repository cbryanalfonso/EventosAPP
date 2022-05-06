import React from 'react';
import { StatusBar } from 'react-native';
import { Inicio } from './src/Start/Inicio';

const App = () => {
  return (
    <>
    <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
      <Inicio />
    </>
  );
};

export default App;
