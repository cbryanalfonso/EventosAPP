import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useState } from 'react';
import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamListAuth } from '../../Hooks/Firebase/exportNavigations';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';



type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>
export const ButtonNotificationHeader = () => {
  const navigation = useNavigation<navigationHeader>();
  const [permissions, setPermissions] = useState({});

  useEffect(() => {
    const type = 'notification';
    PushNotificationIOS.addEventListener(type, onRemoteNotification);
    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
  });

  const onRemoteNotification = (notification : any) => {
    const isClicked = notification.getData().userInteraction === 1;
    console.log(notification.getData());
    if (isClicked) {
      console.log(notification.getData());
      
    } else {
      console.log(notification.getData());
    }
  };


  return (
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('Notifications') } >
      <Icon name="bell" color="#363636" size={wp(5)} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(11),
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    borderRadius: 20,
  },
});
