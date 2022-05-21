import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {logout} from '../../Hooks/Firebase/Firebase';
import InputSearchIcon from '../../components/Input/InputSearch';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextUi} from '../../components/Text/TextUi';

const HomeEventsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <InputSearchIcon placeholder="Search Event" />
      </View>
      <View style={styles.body}>
        <View style={styles.screenEventos}>
          <View style={styles.directionRowEvents}>
            <TextUi
              color="txtBoldTitle"
              texto="Today's Events"
              addStyle={{fontSize: wp(5), fontWeight: '500'}}
            />
            <TouchableOpacity>
              <TextUi
                color="txtViewEvents"
                texto="View all"
                addStyle={{fontWeight: '500'}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.screenEventos}>
          <View style={styles.directionRowEvents}>
            <TextUi
              color="txtBoldTitle"
              texto="Featured’s Event"
              addStyle={{fontSize: wp(5), fontWeight: '500'}}
            />
            <TouchableOpacity>
              <TextUi
                color="txtViewEvents"
                texto="View all"
                addStyle={{fontWeight: '500'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 9,
    paddingHorizontal: wp(5),
  },
  screenEventos: {
    flex: 1,
  },
  directionRowEvents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeEventsScreen;
