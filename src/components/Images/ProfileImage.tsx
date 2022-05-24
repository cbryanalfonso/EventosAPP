import React from 'react'
import { Image, View } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props{
    image: string,
    width?: number,
    height?: number,
}

export const ProfileImage = ({image, width, height}: Props) => {
  return (
    <View style={{backgroundColor: 'white', borderRadius: wp(5)}}>
        <Image
            source={{uri:image}}
            style={{width: width ? wp(width) : wp(92), height: height ? wp(height) : wp(55), borderRadius: wp(5)}}
            resizeMode={'contain'}
        />
    </View>
  )
}
