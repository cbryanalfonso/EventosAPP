import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const useNewEvents = () => {
  const [imagen, setImagen] = useState('');
  const [imagenSecundario1, setImagenSecundario1] = useState('');
  const [imagenSecundario2, setImagenSecundario2] = useState('');
  const [imagenSecundario3, setImagenSecundario3] = useState('');

  function openCameraPhoto() {
    ImagePicker.openPicker({
      width: wp(85),
      height: wp(50),
      cropping: true,
    })
      .then(image => {
        console.log(image);
        if (imagen !== ''){
           if(imagenSecundario1 !== ''){
                if(imagenSecundario2 !== ''){
                    setImagenSecundario3(image.path)
                }else{
                    setImagenSecundario2(image.path)
                }
           }else{
               setImagenSecundario1(image.path)
           }
        }else{
            setImagen(image.path);
        }
        //uploadPhoto(image.path);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return {
    openCameraPhoto,
    imagen,
    imagenSecundario1,
    imagenSecundario2,
    imagenSecundario3,
  };
};
