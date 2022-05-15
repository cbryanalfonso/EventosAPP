import React, { useLayoutEffect, useState } from 'react'
import { firebase as auth } from '@react-native-firebase/auth'

export const useApp = () => {
    const [user, setUser] = useState(true)
    useLayoutEffect(() => {
        const suscriber = auth.auth().onAuthStateChanged(us => {
            if (us) {
                setUser(true)
            } else {
                setUser(false)
            }
        })
        return suscriber; 
    }, [])

    return{
        user,
    }
}
