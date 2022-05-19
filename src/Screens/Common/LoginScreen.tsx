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
import Icon from 'react-native-vector-icons/FontAwesome';
import TextInputUI from '../../components/Input/TextInput';
import {Formik} from 'formik';
import {Button} from '../../components/Button/Button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Hooks/Firebase/exportNavigations';
import {useNavigation} from '@react-navigation/native';
import { useLogin } from '../../Hooks/Common/useLogin';

type signUp = NativeStackNavigationProp<RootStackParamList>;

const LoginScreen = () => {
  const navigation = useNavigation<signUp>();

  const {login} = useLogin();

  return (
   <>
   <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flex: 1, padding: wp(3)}}>
        <View style={styles.backContainer}>
          <TouchableOpacity style={styles.btnIconos}  onPress={() => navigation.goBack()} >
            <Icon
              name="chevron-left"
              color="#4F4F4F"
              size={wp(4.3)}
            />
          </TouchableOpacity>
          <TextUi
            color="txtNormal"
            texto="    Back"
            addStyle={{fontWeight: 'bold'}}
          />
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
                email: '',
                password: '',
              }}
              onSubmit={values => login(values)}>
              {({handleChange, handleBlur, handleSubmit, values}) => (
                <View>
                  <TextInputUI
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    addStyle={{width: wp(90)}}
                    autocapitalize={true}
                  />
                  <TextInputUI
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    value={values.password}
                    addStyle={{width: wp(90)}}
                    security={true}
                  />
                  <View>
                    <Button
                      Texto="Forgot Password?"
                      style="btnSkip"
                      addStyle={{alignSelf: 'flex-end', padding: wp(3)}}
                      addTextStyle={{fontSize: wp(3.5)}}
                    />
                  </View>
                  <Button
                    Texto="Log In"
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
                    <TouchableOpacity style={styles.btnIconos} >
                      <Icon
                        //raised
                        name="facebook"
                        color="#4F4F4F"
                        size={wp(6)}
                        onPress={() => console.log('hello')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnIconos} >
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
                          //raised
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
   </>
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
    paddingTop: wp(1)
  },
  bodyContainer: {
    flex: 10,
    paddingHorizontal: wp(2),
    marginTop: wp(4),
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

export default LoginScreen;
