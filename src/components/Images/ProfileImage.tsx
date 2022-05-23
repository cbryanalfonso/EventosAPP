import React from 'react'
import { Image } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props{
    image: string,
    width?: string,
    height?: string,
}

export const ProfileImage = ({image, width, height}: Props) => {
  return (
    <>
        <Image
            source={{uri:image}}
            style={{width: width ? width : wp(80), height: height ? height : wp(50)}}
            resizeMode={'contain'}
        />
    </>
  )
}
