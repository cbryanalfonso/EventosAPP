import React from 'react';
import { StatusBar } from 'react-native';
import LoginScreen from './src/Screens/Common/LoginScreen';
import SignUpScreen from './src/Screens/Common/SignUpScreen';
import { Inicio } from './src/Screens/Start/Inicio';
import { LogandRegScreen } from './src/Screens/Start/LogandRegScreen';

const App = () => {
  return (
    <>
    <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
    <LoginScreen/>
      {/* <Inicio /> */}
    </>
  );
};

export default App;
