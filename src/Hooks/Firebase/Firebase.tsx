import { firebase as auth } from "@react-native-firebase/auth"

interface Register{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}


export const authFirebase = ({email,password,firstName,lastName,phoneNumber}: Register) => {
    auth.auth()
    .createUserWithEmailAndPassword(email,password)
    .then(()=>{
        console.log('User account created & signed in!');
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
}


