import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface Props {
  Texto: string;
  style: string;
  icon?: boolean;
  addStyle?: any;
  onPress?: () => void;
  addTextStyle?:any;
}

export const Button = ({Texto, style, onPress, icon, addStyle, addTextStyle}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[getButtonStyle(style) as any, addStyle ? addStyle : null]}>
      <Text style={[getTextStyle(style) as any, addTextStyle ? addTextStyle: null]}>{Texto}</Text>
    </TouchableOpacity>
  );
};
const getButtonStyle = (color: any) => {
  switch (color) {
    case 'btnRojo':
      return {
        backgroundColor: '#E8505B',
        borderRadius: wp(30),
        width: wp(50),
        paddingVertical: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
      };
    case 'btnSkip':
      return {
        backgroundColor: 'white',
      };
    case 'btnTransparenteRojo':
      return {
        // backgroundColor: '#E8505B',
        borderRadius: wp(30),
        width: wp(50),
        paddingVertical: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: wp(1),
        borderColor: '#E8505B',
      };
    case 'txtNormal':
      return {
        color: '#4F4F4F',
        fontSize: 16,
      };
    default:
      return {
        color: '#FFFFFF',
        fontSize: 25,
      };
  }
};

const getTextStyle = (color: any) => {
  switch (color) {
    case 'btnRojo':
      return {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
      };
    case 'btnSkip':
      return {
        color: '#4F4F4F',
        fontSize: 18,
        textDecorationLine: 'underline'
      };
    case 'btnTransparenteRojo':
      return {
        color: '#E8505B',
        fontSize: 20,
        fontWeight: '600',
      };
    case 'txtNormal':
      return {
        color: '#4F4F4F',
        fontSize: 16,
      };
    default:
      return {
        color: '#FFFFFF',
        fontSize: 25,
      };
  }
};
