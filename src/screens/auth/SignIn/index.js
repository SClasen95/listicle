import React from 'react'
import { Text,  ScrollView } from 'react-native'
import { styles } from './styles'
import AuthHeader from '../../../components/AuthHeader'
import Input from '../../../components/input'
import Button from '../../../components/Button'
import Separator from '../../../components/Separator'
import GoogleLogin from '../../../components/GoogleLogin'



const Signup = () => {

    const onSignUp = () => {
        console.log("Hello")
    }

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign In"/>
            <Input placeholder={"example@gmail.com"} label="Email"/>
            <Input isPassword={true} placeholder={"*******"} label="Password"/>           
            {/* a un componente que yo creo, si le quiero dar un style, tengo que hacer que reciba ese style por propiedad y despues esa propiedad pasarla al style de lo que quiero que lleve eese estilo */}
            <Button style={styles.button} title="Sign In"  /> 
            <Separator title="Or sign in with"/>
            <GoogleLogin/>
            <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
            </Text>

        </ScrollView>    
    )
}

export default React.memo(Signup);