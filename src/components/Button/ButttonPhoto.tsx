import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextUi} from '../Text/TextUi';

interface Props {
  width: number;
  height: number;
  addStyle?: any;
  texto?: boolean;
  imagen?: string;
  onPresss?: () => void | undefined;
}

export const ButttonPhoto = ({
  addStyle,
  width,
  height,
  texto,
  imagen,
  onPresss,
}: Props) => {
  return (
    <>
      <TouchableOpacity
      onPress={onPresss}
        style={[
          styles.btnPhotoBig,
          addStyle ? addStyle : null,
          {width: wp(width), height: wp(height)},
        ]}>
        {imagen ? (
          <Image
                source={{uri: imagen   }}
                style={{width: wp(width), height: wp(height)}}
                resizeMode='cover'
          />
        ) : (
         <>
          <Icon name="plus" size={wp(height / 3)} color={'#828282'} />
          {texto !== null ? (
            <TextUi texto="Choose File" color="txtPequeno" />
          ) : null}
         </>
        )}
       
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnPhotoBig: {
    borderWidth: 1,
    borderColor: '#828282',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
