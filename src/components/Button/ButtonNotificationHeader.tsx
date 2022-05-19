import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const ButtonNotificationHeader = () => {
  return (
    <TouchableOpacity style={styles.container}>
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
