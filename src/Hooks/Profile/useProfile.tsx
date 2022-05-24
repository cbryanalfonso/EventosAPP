import {logout} from '../../Hooks/Firebase/Firebase';
import ImagePicker from 'react-native-image-crop-picker';
import {firebase} from '@react-native-firebase/storage';
import {firebase as auth} from '@react-native-firebase/auth';
import {useState} from 'react';
import { firebase as db } from '@react-native-firebase/database';
export const useProfile = () => {
  const usuarioActual : string = auth.auth().currentUser?.uid!;
  const [imagen, setImagen] = useState(auth.auth().currentUser?.photoURL);

  function openCameraPhoto() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      //setImagen(image.path);
      uploadPhoto(image.path);
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }

  const uploadPhoto = async (imagen: string) => {
    
    const reference = firebase.storage().ref('avatars').child(usuarioActual);
    await reference.putFile(imagen);

    const url = await firebase
      .storage()
      .ref(`avatars/${usuarioActual}`)
      .getDownloadURL();
      console.log(url);
      setImagen(url);

    db.database()
    .ref(`/Usuarios/${usuarioActual}`)
    .update({
      photoUrl: url
    })
    .then(()=>{
      console.log('Subida correctamente');
      auth.auth().currentUser?.updateProfile({
        photoURL: url
      })
    })
    .catch((err)=>{
      console.log('Erorr .....',err);
    })
  };

  return {
    openCameraPhoto,
    imagen,
  };
};
