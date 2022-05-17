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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSingnUpScreen } from '../../Hooks/Common/useSingnUpScreen';

const correos = [
  {label: '@hotmail.com', value: '@hotmail.com'},
  {label: '@outlook.com', value: '@outlook.com'},
  {label: '@yahoo.com', value: '@yahoo.com'},
  {label: 'No aplica', value: 'No'},
];

const SignUpScreen = () => {
  const {
    phoneInput,
    saveUser

  } = useSingnUpScreen();
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
        <TextUi color="txtBoldTitle" texto="Sign Up" />
        <TextUi
          color="txtNormal"
          texto="Hi, please fill the information to complete the sign up."
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
            onSubmit={values => saveUser(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <View style={styles.rowInput}>
                  <TextInputUI
                    placeholder="First Name"
                    onChangeText={handleChange('name')}
                    value={values.name}
                    addStyle={{width: wp(40)}}
                  />
                  <TextInputUI
                    placeholder="Last Name"
                    onChangeText={handleChange('lastName')}
                    value={values.lastName}
                    addStyle={{width: wp(40)}}
                  />
                </View>
                <PhoneInput
                  ref={phoneInput}
                  defaultValue={values.phoneNumber}
                  defaultCode="MX"
                  layout="first"
                  onChangeText={handleChange('phoneNumber')}
                  // withShadow
                  //autoFocus
                  containerStyle={styles.containerPhone}
                  textContainerStyle={{backgroundColor: 'white'}}
                />
                <View
                  style={[
                    styles.rowInput,
                    {justifyContent: 'center', alignItems: 'center'},
                  ]}>
                  <TextInputUI
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    addStyle={{width: wp(60)}}
                  />
                  <RNPickerSelect
                  
                    onValueChange={value => values.arroba = value }
                    items={correos}
                    placeholder={{
                      label: '@gmail.com',
                      value: '@gmail.com',
                    }}
                    useNativeAndroidPickerStyle={false}
                    style={customPickerStyles}
                  />
                </View>
                <TextInputUI
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  addStyle={{width: wp(90)}}
                  security={true}
                />
                <View style={{flexDirection: 'row'}}>
                  <TextUi
                    color="txtNormal"
                    texto="By accepting the following "
                    addStyle={{marginTop: wp(3), fontSize: wp(3.6)}}
                  />
                  <TextUi
                    color="txtBold"
                    texto="Terms & Conditions"
                    addStyle={{
                      marginTop: wp(3),
                      fontSize: wp(3.6),
                      color: '#E8505B',
                    }}
                  />
                </View>
                <Button
                  Texto="Sign Up"
                  style="btnRojo"
                  addStyle={{width: wp(90), marginTop: wp(7)}}
                  onPress={handleSubmit}
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

export default SignUpScreen;
