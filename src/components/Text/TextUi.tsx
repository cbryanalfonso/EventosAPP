import React from 'react';
import {StyleSheet, Text} from 'react-native';
interface Props {
  texto: string;
  color: string;
}

export const TextUi = ({texto, color}: Props) => {
  return (
    <>
      <Text style={[getTextStyle(color) as any]}>{texto}</Text>
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
    case 'txtNormal':
        return{
            color:'#4F4F4F',
            fontSize: 16,
        }
    default:
      return {
        color: '#FFFFFF',
        fontSize: 25,
      };
  }
};
