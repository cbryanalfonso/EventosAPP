import React from 'react';
import {TouchableOpacity} from 'react-native';
//import {Icon} from '@rneui/themed';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export const ButtonBack = () => {
  return (
    <TouchableOpacity>
      <Icon
        //raised
        name="chevron-left"
        color="#4F4F4F"
        size={wp(4.3)}
        onPress={() => console.log('hello')}
      />
    </TouchableOpacity>
  );
};
