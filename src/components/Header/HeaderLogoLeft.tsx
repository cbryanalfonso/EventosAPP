import React from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const HeaderLogoLeft = () => {
  return (
    <View style={styles.safeareaTop} >
      <Image
        source={require('../../assets/img/Frame.png')}
        style={styles.imageLogo}
        resizeMode='contain'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageLogo: {
    backgroundColor: 'transparent',
    width: wp(11),
    height: 40,
    //marginBottom: Platform.OS === 'ios' ?  wp(2) : wp(0),
  },
  safeareaTop:{
    backgroundColor: 'transparent',
    //backgroundColor: 'blue',
   // width: Platform.OS === 'ios' ? "100%" : "100%",
    //height: '100%',
    //flexDirection: "row",
    alignItems: 'flex-end',
    //marginRight: 0, 
    //marginLeft: wp(-5),
},
});
