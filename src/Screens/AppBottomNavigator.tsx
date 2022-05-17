import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {ButtonNotificationHeader} from '../components/Button/ButtonNotificationHeader';
import {HeaderLogoLeft} from '../components/Header/HeaderLogoLeft';
import HeaderTitle from '../components/Header/HeaderTitle';
import HomeEventsScreen from './HomeEvents/HomeEventsScreen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

export const AppBottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeEvents"
        component={HomeEventsScreen}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: props => (
            <View style={{width: wp(33),}}>
              <HeaderLogoLeft />
            </View>
          ),
          headerTitle: props => (
            <View style={{width: wp(33), justifyContent: 'center' }}>
              <HeaderTitle texto="Home" />
            </View>
          ),
          headerRight: props => (
            <View style={{width: wp(23), justifyContent: 'center', alignItems: 'center'}}>
              <ButtonNotificationHeader />
            </View>
          ),
          headerTransparent: false,
        })}
      />
    </Tab.Navigator>
  );
};
