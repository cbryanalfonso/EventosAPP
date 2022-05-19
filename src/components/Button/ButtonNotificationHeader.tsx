
import  Icon  from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const ButtonNotificationHeader = () => {
  return (
   <TouchableOpacity style={{ width: wp(11), alignItems: 'center',  height: 40, justifyContent: 'center', borderRadius: 20  }}>
      <Icon
        //raised
        name='bell'
        color='#363636'
         />
   </TouchableOpacity>
  )
}
