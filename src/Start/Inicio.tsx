import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TextUi} from '../components/Text/TextUi';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from '../components/Button/Button';

export const Inicio = () => {
  const item = [
    {
      id: 1,
      img: './../assets/img/Group.png',
    },
    {
      id: 2,
      img: './../assets/img/Group(1).png',
    },
    {
      id: 3,
      img: './../assets/img/Group(2).png',
    },
  ];

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
            source={require('./../assets/img/Group.png')}
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
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Button 
            Texto='Skip'
            style='btnSkip'
          />
      </View>
      <View style={styles.body}>{primero()}</View>
      <View style={styles.footer}>
          <Button Texto='Next' style='btnRojo' />
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
    height: wp(60),
    width: wp(60),
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: wp(3),
  },
  body: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  footer: {
    flex: 1,
   // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
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
    justifyContent: 'space-evenly'
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
