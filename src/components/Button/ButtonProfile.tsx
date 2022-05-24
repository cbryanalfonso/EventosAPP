import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface Props{
    nameIcon: string,
    text: string,
}

const ButtonProfile = ({nameIcon, text}: Props) => {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Icon name={nameIcon} color={'#828282'} />
        <Text style={styles.txt}>{text}</Text>
        <Icon name="angle-right" />
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(90),
    paddingVertical: wp(3),
    paddingHorizontal: wp(2),
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: wp(2),
    marginVertical: wp(1)
  },
  txt:{
      fontSize: wp(3.2),
      color:'#828282'
  }
});

export default ButtonProfile;
