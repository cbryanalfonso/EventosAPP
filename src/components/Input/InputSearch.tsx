import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/FontAwesome';

interface Props {
  placeholder: string;
  nameRightIcon?: string;
  nameLeftIcon?: boolean;
  autocapitalize?: boolean;
  onChangeText?: any;
  onBlur?: any;
  value?: any;
  style?: string;
  security?: boolean;
  addStyle?: any;
}

const InputSearchIcon = ({placeholder,onChangeText,onBlur,value,addStyle,autocapitalize,security}:Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#828282'}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        style={[
          {
            paddingVertical: wp(3),
          },
          addStyle ? addStyle : null,
        ]}
        secureTextEntry={security ? true : false}
        autoCapitalize={autocapitalize ? 'none' : 'words'}
      />
      <Icon name='pencil' color={"#828282"} size={wp(4)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: wp(90),
    height: wp(10),
    borderRadius: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: wp(3)
  },
});

export default InputSearchIcon;
