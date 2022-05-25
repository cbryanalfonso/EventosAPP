import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamListAuth } from '../../Hooks/Firebase/exportNavigations';


type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>
export const ButtonNotificationHeader = () => {

  const navigation = useNavigation<navigationHeader>()
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
