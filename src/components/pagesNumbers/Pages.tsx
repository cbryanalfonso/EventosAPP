import { Text } from '@rneui/base-edge';
import React, { ReactElement } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props{
  value: number,
  children?: ReactElement
}

const Pages = ({value, children}: Props) => {
  switch (value) {
    case 1:
      return(
        <SafeAreaView style={styles.containerBtn}>
            <View style={styles.numbers}>
                <Text style={styles.txt}>1</Text>
            </View>
            <View style={styles.lineNumbers} />
            <View style={styles.numbersInactivo}>
                <Text style={styles.txtInativo}>2</Text>
            </View>
            <View style={styles.lineNumbers} />
            <View style={styles.numbersInactivo}>
                <Text style={styles.txtInativo}>3</Text>
            </View>
        </SafeAreaView>
      );
  }

  return children as ReactElement<any>

}

const styles = StyleSheet.create({
    containerBtn:{
      flex: 1, 
      flexDirection: 'row', 
      alignItems: 'flex-end',  
      marginHorizontal: wp(2),
      justifyContent: 'center' 
    },
    numbers:{
      width: wp(10),
      height: wp(10),
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
      backgroundColor: '#E8505B',
      borderColor: '#E8505B',

    },
    numbersInactivo:{
      width: wp(10),
      height: wp(10),
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp(5),
      backgroundColor: '#F2F2F2',
      opacity: 0.8,
      borderColor: '#363636'
    },
    txt:{
      fontSize:wp(4),
      fontWeight: '600',
      color: '#FFF'
    },
    txtInativo:{
      fontSize:wp(4),
      fontWeight: '600',
      color: '#363636'
    },
    lineNumbers:{
      borderColor: '#BDBDBD',
      width: wp(27),
      borderBottomWidth:1,
      marginBottom: wp(5),
      borderStyle: 'solid',
    }
});

export default Pages