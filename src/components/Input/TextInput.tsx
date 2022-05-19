import React from 'react';
import {TextInput, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { TextUi } from '../Text/TextUi';

interface Props {
  placeholder: string;
  nameRightIcon?: string;
  nameLeftIcon?: boolean;
  autocapitalize?: boolean;
  onChangeText: any;
  onBlur?: any;
  value: any;
  style?: string;
  security?: boolean;
  addStyle?: any;
}

const TextInputUI = ({
  placeholder,
  autocapitalize,
  onChangeText,
  onBlur,
  value,
  security,
  addStyle,
}: Props) => {
  return (
    <View style={{flexDirection: 'column', marginVertical: wp(1),}}>
    <TextUi
         color="txtNormal"
         texto={placeholder}
         addStyle={{marginTop: wp(3), color:'#363636', fontSize: wp(3.5), marginBottom: wp(1)}}
    />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#BDBDBD'}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        style={[
          {
            borderBottomWidth: wp(0.1),
            borderColor:'#BDBDBD',
            marginTop: wp(2)
          },
          addStyle ? addStyle : null,
        ]}
        secureTextEntry={security ? true : false}
        autoCapitalize={autocapitalize ? 'none' : 'words'}
      />
    </View>
  );
};

export default TextInputUI;
