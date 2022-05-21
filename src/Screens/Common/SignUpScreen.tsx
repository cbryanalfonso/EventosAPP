import React, {useRef} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TextUi} from '../../components/Text/TextUi';
import TextInputUI from '../../components/Input/TextInput';
import {Formik} from 'formik';
import PhoneInput from 'react-native-phone-number-input';
import RNPickerSelect from 'react-native-picker-select';
import {Button} from '../../components/Button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSingnUpScreen} from '../../Hooks/Common/useSingnUpScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Hooks/Firebase/exportNavigations';
import {useNavigation} from '@react-navigation/native';
Icon.loadFont();

type signUp = NativeStackNavigationProp<RootStackParamList>;
const correos = [
  {label: '@gmail.com', value: '@gmail.com'},
  {label: '@hotmail.com', value: '@hotmail.com'},
  {label: '@outlook.com', value: '@outlook.com'},
  {label: '@yahoo.com', value: '@yahoo.com'},
  {label: 'No aplica', value: 'No'},
];

const SignUpScreen = () => {
  const {phoneInput, saveUser} = useSingnUpScreen();

  const navigation = useNavigation<signUp>();
  return (
    <SafeAreaView style={styles.container}>

   <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <KeyboardAwareScrollView
        contentContainerStyle={{flex: 1, padding: wp(2)}}>
        <View style={styles.backContainer}>
          <TouchableOpacity style={styles.btnIconos} onPress={()=>navigation.goBack()} >
            <Icon name="chevron-left" color="#4F4F4F" size={wp(4.3)} />
          </TouchableOpacity>
          <TextUi
            color="txtNormal"
            texto="    Back"
            addStyle={{fontWeight: 'bold'}}
          />
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
                      autocapitalize={true}
                    />
                    <RNPickerSelect
                      onValueChange={value => (values.arroba = value)}
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
                    <TouchableOpacity style={styles.btnIconos}>
                      <Icon
                        name="facebook"
                        color="#4F4F4F"
                        size={wp(6)}
                        onPress={() => console.log('hello')}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnIconos}>
                      <Icon
                        //raised
                        name="google"
                        color="#4F4F4F"
                        size={wp(6)}
                        onPress={() => console.log('hello')}
                      />
                    </TouchableOpacity>
                    {Platform.OS == 'ios' ? (
                      <TouchableOpacity style={styles.btnIconos}>
                        <Icon
                          // raised
                          name="apple"
                          color="#4F4F4F"
                          size={wp(6)}
                          onPress={() => console.log('hello')}
                        />
                      </TouchableOpacity>
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
    flex: 10,
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
  btnIconos: {
    width: wp(12),
    height: wp(12),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    //paddingVertical: 10,
    //paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginTop: wp(11),
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
