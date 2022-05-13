import React, {useRef} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextUi} from '../../components/Text/TextUi';
import {Icon} from '@rneui/themed';
import TextInputUI from '../../components/Input/TextInput';
import {Formik} from 'formik';
import PhoneInput from 'react-native-phone-number-input';
import RNPickerSelect from 'react-native-picker-select';
import {Button} from '../../components/Button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.backContainer}>
          <Icon
            raised
            name="chevron-left"
            type="font-awesome"
            color="#4F4F4F"
            size={wp(4.3)}
            onPress={() => console.log('hello')}
          />
          <TextUi color="txtNormal" texto=" Back" />
        </View>

        <View style={styles.bodyContainer}>
          <TextUi color="txtBoldTitle" texto="Log In" />
          <TextUi
            color="txtNormal"
            texto="Hi, please fill the information to complete the log in."
            addStyle={{marginTop: wp(3)}}
          />

          <View>
            <Formik
              initialValues={{
                name: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                arroba: '',
                password: '',
              }}
              onSubmit={values => console.log(values)}>
              {({handleChange, handleBlur, handleSubmit, values}) => (
                <View>
                  <TextInputUI
                    placeholder="Email"
                    onChangeText={handleChange('password')}
                    value={values.password}
                    addStyle={{width: wp(90)}}
                    security={true}
                  />
                  <TextInputUI
                    placeholder="Email"
                    onChangeText={handleChange('password')}
                    value={values.password}
                    addStyle={{width: wp(90)}}
                    security={true}
                  />
                  <View>
                        <Button
                            Texto='Forgot Password?'
                            style='btnSkip'
                            addStyle={{alignSelf: 'flex-end', padding: wp(3)}}
                            addTextStyle={{fontSize: wp(3.5)}}
                        />
                    
                  </View>
                  <Button
                    Texto="Log In"
                    style="btnRojo"
                    addStyle={{width: wp(90), marginTop: wp(7)}}
                  />
                  <TextUi
                    color="txtNormal"
                    texto="or "
                    addStyle={{marginTop: wp(3), textAlign: 'center'}}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: wp(3),
                      justifyContent: 'space-around',
                      width: wp(60),
                      alignSelf: 'center',
                    }}>
                    <Icon
                      raised
                      name="facebook"
                      type="font-awesome"
                      color="#4F4F4F"
                      size={wp(6)}
                      onPress={() => console.log('hello')}
                    />
                    <Icon
                      raised
                      name="google"
                      type="font-awesome"
                      color="#4F4F4F"
                      size={wp(6)}
                      onPress={() => console.log('hello')}
                    />
                    {Platform.OS == 'ios' ? (
                      <Icon
                        raised
                        name="apple"
                        type="font-awesome"
                        color="#4F4F4F"
                        size={wp(6)}
                        onPress={() => console.log('hello')}
                      />
                    ) : null}
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp(3),
  },
  backContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bodyContainer: {
    flex: 9,
    paddingHorizontal: wp(2),
    marginTop: wp(4)
  },
  containerPhone: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: wp(0.1),
    alignSelf: 'center',
    marginTop: wp(2),
    width: wp(90),
    borderColor: '#BDBDBD',
  },
  rowInput: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: wp(3),
  },
});

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 14,
    //paddingHorizontal: 10,
    //paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 8,
    color: 'black',
    width: wp(30),
    marginTop: wp(8),
    //paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default LoginScreen;