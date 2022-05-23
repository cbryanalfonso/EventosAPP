import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
interface Props {
  texto: string;
  color: string;
  addStyle?: any;
}

export const TextUi = ({texto, color, addStyle}: Props) => {
  return (
    <>
      <Text style={[getTextStyle(color) as any,  addStyle ? addStyle : null]}>{texto}</Text>
    </>
  );
};

const getTextStyle = (color: any) => {
  switch (color) {
    case 'txtBold':
      return {
        color: '#363636',
        fontSize: 24,
        fontWeight: 'bold',
      };
      case 'txtBoldTitle':
        return {
          color: '#363636',
          fontSize: wp(8),
          fontWeight: 'bold',
        };
    case 'txtNormal':
        return{
            color:'#4F4F4F',
            fontSize: wp(4.2),
        }
    case 'txtViewEvents':
      return{
        color:'#E7515B',
        fontSize: wp(4.2),
      }
    case 'txtWhite':{
      return{
        color: 'white',
        fontSize: wp(3.5),
        fontWeight: '400',
      }
    }
    default:
      return {
        color: '#FFFFFF',
        fontSize: 25,
      };
  }
};
