import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View} from 'react-native';
import {ButtonNotificationHeader} from '../components/Button/ButtonNotificationHeader';
import {HeaderLogoLeft} from '../components/Header/HeaderLogoLeft';
import HeaderTitle from '../components/Header/HeaderTitle';
import HomeEventsScreen from './HomeEvents/HomeEventsScreen';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeCalendars} from './HomeCalendars/HomeCalendars';
import {HomeNewEvents} from './HomeNewEvents/HomeNewEvents';
import {HomeHistory} from './EventsHistory/HomeHistory';
import {HomeProfile} from './Profile/HomeProfile';
import { type } from 'os';

interface Props {
  name: string;
}


const Tab = createBottomTabNavigator();

export const AppBottomNavigator = () => {
  const screenOptions = (route: any, color: string) => {
    let iconName: string = '';
    switch (route.name) {
      case 'HomeEvents':
        iconName = 'home';
        break;
      case 'HomeCalendars':
        iconName = 'calendar';
        break;
      case 'HomeNewEvents':
        iconName = 'plus';
        break;
      case 'HomeHistory':
        iconName = 'list';
        break;
      case 'HomeProfile':
        iconName = 'user';
        break;
    }
    return <Icon name={iconName} color={color} size={wp(6)} />;
  };
  return (
    <Tab.Navigator
      initialRouteName="HomeEvents"
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
        tabBarActiveTintColor: '#E8505B',
        tabBarInactiveTintColor: '#363636',
        //tabBarItemStyle:{borderTopLeftRadius: 20, borderTopRightRadius: 20},
       // tabBarItemStyle: {borderRadius: 25},
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: '#FFF',
          borderRadius: 25,
          height: wp(15),
          paddingBottom: wp(1)
        },
      })}>
      <Tab.Screen
        name="HomeEvents"
        component={HomeEventsScreen}
        options={({navigation}) => ({
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: props => (
            <View style={{marginLeft: wp(2)}}>
              <HeaderLogoLeft/>
            </View>
          ),
          headerTitle: props => (
              <HeaderTitle texto="Home" />
          ),
          headerRight: props => (
                <ButtonNotificationHeader />
          ),
          headerTransparent: false,
        })}
      />
      <Tab.Screen
        name="HomeCalendars"
        component={HomeCalendars}
        options={({navigation}) => ({
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: props => (
            <View style={{marginLeft: wp(2)}}>
              <HeaderLogoLeft/>
            </View>
          ),
          headerTitle: props => (
              <HeaderTitle texto="Event History" />
          ),
          headerRight: props => (
                <ButtonNotificationHeader />
          ),
          headerTransparent: false,
        })}
      />
      <Tab.Screen
        name="HomeNewEvents"
        component={HomeNewEvents}
        options={({navigation}) => ({
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: props => (
            <View style={{marginLeft: wp(2)}}>
              <HeaderLogoLeft/>
            </View>
          ),
          headerTitle: props => (
              <HeaderTitle texto="Create Event" />
          ),
          headerRight: props => (
                <ButtonNotificationHeader />
          ),
          headerTransparent: false,
        })}
      />
      <Tab.Screen
        name="HomeHistory"
        component={HomeHistory}
        options={({navigation}) => ({
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: props => (
            <View style={{marginLeft: wp(2)}}>
              <HeaderLogoLeft/>
            </View>
          ),
          headerTitle: props => (
              <HeaderTitle texto="Event Report" />
          ),
          headerRight: props => (
                <ButtonNotificationHeader />
          ),
          headerTransparent: false,
        })}
      />
      <Tab.Screen
        name="HomeProfile"
        component={HomeProfile}
        options={({navigation}) => ({
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerLeft: props => (
            <View style={{marginLeft: wp(2)}}>
              <HeaderLogoLeft/>
            </View>
          ),
          headerTitle: props => (
              <HeaderTitle texto="My profile" />
          ),
          headerRight: props => (
                <ButtonNotificationHeader />
          ),
          headerTransparent: false,
        })}
      />
    </Tab.Navigator>
  );
};
