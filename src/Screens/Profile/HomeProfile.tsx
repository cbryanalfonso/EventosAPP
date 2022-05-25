import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProfileImage} from '../../components/Images/ProfileImage';
import { TextUi } from '../../components/Text/TextUi';
import {useProfile} from '../../Hooks/Profile/useProfile';
import ButtonProfile from '../../components/Button/ButtonProfile';

export const HomeProfile = () => {
  const {imagen, openCameraPhoto} = useProfile();

  return (
    <SafeAreaView style={styles.containerHome}>
      <View style={styles.containerImage}>
        {imagen ? (
          <ProfileImage image={imagen} />
        ) : (
          <View style={styles.photoUser}>
            <Icon name="user" size={wp(40)} color={'#E8505B'} />
          </View>
        )}
        <TouchableOpacity
        onPress={()=>{openCameraPhoto()}}
          style={[
            styles.btnEdit,
            {backgroundColor: imagen ? '#E8505B' : 'white'},
          ]}>
          <Icon
            name="pencil"
            size={wp(3.5)}
            color={imagen ? 'white' : '#E8505B'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.informationEvents}>
        <View style={styles.center}>
          <TextUi texto='Featured Events' color='txtWhite' />
          <TextUi texto='20' color='txtWhite' addStyle={{fontSize: wp(4), fontWeight: '600'}} />
        </View>
        <View style={styles.center}>
          <TextUi texto='Live Events' color='txtWhite' />
          <TextUi texto='20' color='txtWhite' addStyle={{fontSize: wp(4), fontWeight: '600'}} />
        </View>
        <View style={styles.center}>
          <TextUi texto='Complete Events' color='txtWhite' />
          <TextUi texto='20' color='txtWhite' addStyle={{fontSize: wp(4), fontWeight: '600'}} />
        </View>
      </View>
      <View style={styles.containerInformation}>
        <ButtonProfile nameIcon='user' text='My Profile' />
        <ButtonProfile nameIcon='info' text='About us' />
        <ButtonProfile nameIcon='file' text='Privacy Policy' />
        <ButtonProfile nameIcon='file' text='Terms & Conditions' />
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    marginHorizontal: wp(2),
    marginVertical: wp(4)
  },
  containerImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInformation: {
    flex: 4,
    marginTop: wp(15),
    alignItems: 'center'
  },
  photoUser: {
    width: wp(92),
    height: wp(55),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: wp(5),
  },
  btnEdit: {
    width: wp(6),
    height: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    right: wp(6),
    top: wp(5),
  },
  informationEvents: {
    width: wp(87),
    alignSelf: 'center',
    backgroundColor: '#E8505B',
    paddingHorizontal: wp(2),
    paddingVertical: wp(3),
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderRadius: wp(3),
    position: 'absolute',
    top: wp(49)
  },
  center:{
    alignItems: 'center'
  }
});
