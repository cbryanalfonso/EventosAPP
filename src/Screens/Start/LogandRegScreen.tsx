import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from '../../components/Button/Button';
import {RootStackParamList} from '../../Hooks/Firebase/exportNavigations';

type signUp = NativeStackNavigationProp<RootStackParamList>;

export const LogandRegScreen = () => {
  const navigation = useNavigation<signUp>();
  return (
    <>
    <StatusBar barStyle={'light-content'} backgroundColor={'black'}  />
    <View style={styles.container}> 
        <ImageBackground
          source={require('../../assets/img/fondo.png')}
          style={{width: wp(100), height: hp(100)}}>
          <View style={styles.subContainer}></View>
          <View style={styles.superficieContenedor}>
            <View style={styles.containerLogo}>
              <Image
                source={require('../../assets/img/Frame.png')}
                style={{width: wp(50), height: hp(40)}}
                resizeMode={'contain'}
              />
            </View>
            <View
              style={[
                styles.containerLogo,
                {justifyContent: 'flex-end', paddingBottom: hp(7)},
              ]}>
              <Button
                style="btnRojo"
                Texto="Sign Up"
                addStyle={styles.addStyleBtn}
                onPress={() => navigation.navigate('RegisterScreen')}
              />
              <Button
                style="btnTransparenteRojo"
                Texto="Log in"
                addStyle={[styles.addStyleBtn, {marginBottom: 0}]}
                onPress={() => navigation.navigate('LoginScreeen')}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // overflow: 'hidden',
  },
  subContainer: {
    height: hp(100),
    width: wp(100),
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  superficieContenedor: {
    position: 'absolute',
    width: wp(100),
    height: hp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {
    flex: 1,
  },
  addStyleBtn: {
    marginBottom: hp(3),
    width: wp(70),
  },
});
