import {firebase as auth} from '@react-native-firebase/auth';

interface Values {
  email: string;
  password: string;
}

export const useLogin = () => {
  const login = ({email, password}:Values) => {
    auth
      .auth()
      .signInWithEmailAndPassword(
        email,
        password,
      )
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return{
      login,
  }
};
