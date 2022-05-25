import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SignUpScreen from './Common/SignUpScreen';
import HomeEventsScreen from './HomeEvents/HomeEventsScreen';
import { useApp } from '../Hooks/app/useApp';
import { Inicio } from './Start/Inicio';
import { LogandRegScreen } from './Start/LogandRegScreen';
import { RootStackParamList, RootStackParamListAuth } from '../Hooks/Firebase/exportNavigations';
import LoginScreen from './Common/LoginScreen';
import { AppBottomNavigator } from './AppBottomNavigator';
import { Notifications } from './Profile/Notifications';
import { TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { HeaderLogoLeft } from '../components/Header/HeaderLogoLeft';
import HeaderTitle from '../components/Header/HeaderTitle';
import { ButtonNotificationHeader } from '../components/Button/ButtonNotificationHeader';
import { ButtonBack } from '../components/Button/ButtonBack';

export const AppNavigator = () => {

    const {
        user,
    } = useApp()
    const MainStackAuth = createNativeStackNavigator<RootStackParamListAuth>();
    const MainStackNoAuth = createNativeStackNavigator<RootStackParamList>();



    const stackAuth = () =>(
        <MainStackAuth.Navigator>
            <MainStackAuth.Screen name="AppBottom" component={AppBottomNavigator} options={{headerShown: false}} />
            <MainStackAuth.Screen name='HomeEvents' component={HomeEventsScreen} />
            <MainStackAuth.Screen name='Notifications' component={Notifications} 
                 options={({navigation}) => ({
                    tabBarShowLabel: false,
                    headerStyle: {
                      backgroundColor: 'white',
                    },
                    headerLeft: props => (
                       <ButtonBack/>
                    ),
                    headerTitle: props => (
                        <HeaderTitle texto="Notifications" />
                    ),
                    headerRight: props => (
                      
                        <HeaderLogoLeft />
                    ),
                    headerTransparent: false,
                  })}
            />
        </MainStackAuth.Navigator>
    )
    const stackNoAuth = () =>(
        <MainStackNoAuth.Navigator>
            <MainStackNoAuth.Screen name="Inicio" component={Inicio} options={{headerShown: false}} />
            <MainStackNoAuth.Screen name='LogandRegister' component={LogandRegScreen} options={{headerShown: false}}  />
            <MainStackNoAuth.Screen name ='RegisterScreen' component={SignUpScreen} options={{headerShown: false}} />
            <MainStackNoAuth.Screen name = 'LoginScreeen' component={LoginScreen} options={{headerShown: false}} />
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
