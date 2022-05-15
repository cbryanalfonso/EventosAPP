import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SignUpScreen from './Common/SignUpScreen';
import HomeEventsScreen from './HomeEvents/HomeEventsScreen';
import { useApp } from '../Hooks/app/useApp';
import { Inicio } from './Start/Inicio';
import { LogandRegScreen } from './Start/LogandRegScreen';
import { RootStackParamList } from '../Hooks/Firebase/exportNavigations';
import LoginScreen from './Common/LoginScreen';

export const AppNavigator = () => {

    const {
        user,
    } = useApp()
    const MainStackAuth = createNativeStackNavigator();
    const MainStackNoAuth = createNativeStackNavigator<RootStackParamList>();



    const stackAuth = () =>(
        <MainStackAuth.Navigator>
            <MainStackAuth.Screen name='HomeEvents' component={HomeEventsScreen} />
        </MainStackAuth.Navigator>
    )
    const stackNoAuth = () =>(
        <MainStackNoAuth.Navigator>
            <MainStackNoAuth.Screen name="Inicio" component={Inicio} options={{headerShown: false}} />
            <MainStackNoAuth.Screen name='LogandRegister' component={LogandRegScreen} options={{headerShown: false}}  />
            <MainStackNoAuth.Screen name ='RegisterScreen' component={SignUpScreen} options={{headerShown: false}} />
            <MainStackAuth.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}} />
        </MainStackNoAuth.Navigator>
    )


  return (
    <NavigationContainer>
        {
            user ? (
                stackAuth()
                ) : stackNoAuth()
        }
    </NavigationContainer>  
  )
}
