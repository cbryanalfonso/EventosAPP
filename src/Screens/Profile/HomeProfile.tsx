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
          style={[
            styles.btnEdit,
            {backgroundColor: imagen ? 'white' : '#E8505B'},
          ]}>
          <Icon
            name="pencil"
            size={wp(3.5)}
            color={imagen ? '#E8505B' : 'white'}
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
      <View style={styles.containerInformation}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    marginHorizontal: wp(2),
  },
  containerImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInformation: {
    flex: 4,
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
    top: wp(7),
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
