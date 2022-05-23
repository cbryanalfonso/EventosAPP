
import {logout} from '../../Hooks/Firebase/Firebase';
import ImagePicker from 'react-native-image-crop-picker'
import { useState } from 'react';
export const useProfile = () => {
    const [imagen, setImagen] = useState('')
  function openCameraPhoto() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image.path);
      setImagen(image.path)
    });
  }

  return{
      openCameraPhoto,
      imagen,


  }
};
