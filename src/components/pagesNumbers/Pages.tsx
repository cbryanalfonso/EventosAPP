import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Pages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View></View>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    flexDirection: 'row',
  },
});
