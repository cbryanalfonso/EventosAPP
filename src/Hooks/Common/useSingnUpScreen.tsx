import {useRef} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {firebase as auth} from '@react-native-firebase/auth';
import {firebase as db} from '@react-native-firebase/database';
import {Alert} from 'react-native';

interface Values {
  name: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  arroba: string;
  password: string;
}

export const useSingnUpScreen = () => {
  const phoneInput = useRef<PhoneInput>(null);

  const saveUser = ({
    name,
    lastName,
    phoneNumber,
    email,
    arroba,
    password,
  }: Values) => {
    const correoCompleto = email + arroba;
    if (name && email && password) {
      auth
        .auth()
        .createUserWithEmailAndPassword(correoCompleto, password)
        .then(userCredential => {
          console.log('User account created & signed in!');
          var user = userCredential.user;
          user
            .updateProfile({
              displayName: name,
            })
            .then(() => {
              db.database()
                .ref(`/Usuarios/${user.uid}`)
                .set({
                  name: name,
                  email: correoCompleto,
                  password: password,
                  uid: user.uid,
                })
                .then(() => {
                  // navigation.navigate('LoginScreen')
                  console.log('Lo que se sube a base de datos->');
                })
                .catch(error => {
                  console.log(error);
                });
            })
            .catch(error => {
              Alert.alert(error);
            });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } else {
      console.log('nada');
    }
  };

  return {
    phoneInput,
    saveUser,
  };
};

/*
 

*/
