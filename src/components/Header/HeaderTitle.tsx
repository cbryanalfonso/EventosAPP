import { Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props{
    texto: string;
}

const HeaderTitle = ({texto}: Props) => {
  return (
   <View style={styles.fondo}>
       <Text style={styles.textCenter} >{texto}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
    fondo:{
        backgroundColor: 'transparent',
        width : wp(34),
        height: 60,
        marginLeft: wp(-3),
        //flexDirection: "row",
        justifyContent:"center",
        alignItems: 'center'
    },
    textCenter:{
        //marginTop: wp(2),
       // marginLeft: wp(11), 
        fontSize: wp(4.6),
        fontWeight:'bold',
        textAlign: 'center',
        color:'#363636'
    }
});

export default HeaderTitle