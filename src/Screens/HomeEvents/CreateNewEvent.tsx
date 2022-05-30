import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Pages from '../../components/pagesNumbers/Pages';
import PagesFunctions from '../../components/pagesNumbers/PagesFunctions';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextUi} from '../../components/Text/TextUi';
import {ButttonPhoto} from '../../components/Button/ButttonPhoto';
import { useNewEvents } from '../../Hooks/Events/useNewEvents';

export const CreateNewEvent = () => {

  const {
    imagen,
    openCameraPhoto,
    imagenSecundario1,
    imagenSecundario2,
    imagenSecundario3,
  } =  useNewEvents()

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Pages value={1} />
        </View>
        <View style={styles.body}>
          <View style={styles.photo}>
            <TextUi texto="Attached Photos" color="txtNormalBold" />
            <View style={{marginVertical: wp(1), alignItems: 'center'}}>
              <ButttonPhoto height={40} width={87} onPresss={openCameraPhoto} imagen={imagen} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: wp(1),
                }}>
                <ButttonPhoto
                  height={20}
                  width={28}
                  addStyle={{marginRight: wp(1.5)}}
                  onPresss={openCameraPhoto} imagen={imagenSecundario1} 
                />
                <ButttonPhoto
                  height={20}
                  width={28}
                  addStyle={{marginRight: wp(1.5)}}
                  onPresss={openCameraPhoto} imagen={imagenSecundario2} 
                />
                <ButttonPhoto height={20} width={28}
                 onPresss={openCameraPhoto} imagen={imagenSecundario3} 
                />
              </View>
            </View>
          </View>
          <View style={styles.detailEvents}>
            <TextUi texto="Event Details" color="txtNormalBold" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    marginHorizontal: wp(2),
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 9,
  },
  photo: {
    flex: 2.8,
    padding: wp(4),
    marginTop: wp(1),
  },
  detailEvents: {
    flex: 4,
    padding: wp(4),
  },
});
