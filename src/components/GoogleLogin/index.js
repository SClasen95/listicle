import React from "react"
import { Image, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const GoogleLogin = () => {
    const handleGoogleLogin = async() => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo :>> ', userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            } else {
            // some other error happened
            }
        }
    }
    return (        
        <TouchableOpacity onPress={handleGoogleLogin} activeOpacity={0.8} style={styles.container}> 
        <Image style={styles.image} source={require('../../assets/google.png')}/>
        </TouchableOpacity>
    )
}

//Esto de react.memo lo q hace es que no vuelva a cargar el componente CADA vez que algo cambia en la vista, si no tiene que ver con el componente.
export default React.memo(GoogleLogin)