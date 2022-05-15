import React, { useState } from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TextUi} from '../../components/Text/TextUi';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Hooks/Firebase/exportNavigations';

type logScreen = NativeStackNavigationProp<RootStackParamList, 'LogandRegister'>

export const Inicio = () => {
 const navigation = useNavigation<logScreen>()
 const [ventana, setVentana] = useState(false)
 const [ventana2, setVentana2] = useState(false)
 const [ventana3, setVentana3] = useState(false)

  const primero = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center',
            //backgroundColor: 'yellow'
          }}>
          <Image
            source={require('../../assets/img/Group.png')}
            style={styles.img}
            resizeMode={'contain'}
            resizeMethod={'resize'}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            //backgroundColor: 'red'
          }}>
          <View style={styles.infoEvent}>
            <TextUi texto="Create a event" color="txtBold" />
            <TextUi
              texto="Create your own event & manage yourself"
              color="txtNormal"
            />
          </View>
        </View>
        <View style={styles.bolitas}>
          <View style={styles.circle} />
          <View style={styles.circleVacio} />
          <View style={styles.circleVacio} />
        </View>
        <View style={styles.footer}>
          <Button Texto="Next" style="btnRojo" onPress={()=>setVentana(true)} />
        </View>
      </SafeAreaView>
    );
  };

  const segundo = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center',
            //backgroundColor: 'yellow'
          }}>
          <Image
            source={require('../../assets/img/Group(1).png')}
            style={styles.img}
            resizeMode={'contain'}
            resizeMethod={'resize'}
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            //backgroundColor: 'red'
          }}>
          <View style={styles.infoEvent}>
            <TextUi texto="Book a event" color="txtBold" />
            <TextUi
              texto="Create your own event & manage yourself"
              color="txtNormal"
            />
          </View>
        </View>
        <View style={styles.bolitas}>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circleVacio} />
        </View>
        <View style={styles.footer}>
          <Button Texto="Next" style="btnRojo" onPress={()=>setVentana2 (true)} />
        </View>
      </SafeAreaView>
    );
  };

  const tercero = ()=>{
    return (
        <SafeAreaView>
          <View
            style={{
              flex: 5,
              justifyContent: 'center',
              alignItems: 'center',
              //backgroundColor: 'yellow'
            }}>
            <Image
              source={require('../../assets/img/Group(2).png')}
              style={styles.img}
              resizeMode={'contain'}
              resizeMethod={'resize'}
            />
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              //backgroundColor: 'red'
            }}>
            <View style={styles.infoEvent}>
              <TextUi texto="Easy to manage" color="txtBold" />
              <TextUi
                texto="Create your own event & manage yourself"
                color="txtNormal"
              />
            </View>
          </View>
          <View style={styles.bolitas}>
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
          </View>
          <View style={styles.footer}>
            <Button Texto="Next" style="btnRojo" onPress={() =>  navigation.navigate('LogandRegister') }   /> 
          </View>
        </SafeAreaView>
      );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button Texto="Skip" style="btnSkip" />
      </View>
      <View style={styles.body}>
          
          {ventana ?
            (ventana2) ? 
                tercero()
                : segundo()
                : primero()
          }
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp(5),
  },
  img: {
    height: wp(80),
    width: wp(80),
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: wp(3),
    //backgroundColor: 'red'
  },
  body: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow'
    // backgroundColor: 'red'
  },
  footer: {
    flex: 2,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoEvent: {
    alignItems: 'center',
    paddingTop: wp(2),
    //marginBottom: -10,
  },
  bolitas: {
    flexDirection: 'row',
    //paddingTop: 20,
    // marginTop: -30,
    // backgroundColor: 'purple',
    width: wp(20),
    alignSelf: 'center',
    alignContent: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  circle: {
    width: wp(3),
    height: wp(3),
    borderRadius: 100 / 2,
    backgroundColor: '#4F4F4F',
  },
  circleVacio: {
    width: wp(3),
    height: wp(3),
    borderRadius: 100 / 2,
    backgroundColor: '#C4C4C4',
  },
});

//export default Inicio
