import React from 'react'
import { Text,  ScrollView } from 'react-native'
import { styles } from './styles'
import AuthHeader from '../../../components/AuthHeader'
import Input from '../../../components/input'
import Button from '../../../components/Button'
import Separator from '../../../components/Separator'
import GoogleLogin from '../../../components/GoogleLogin'
import { SafeAreaView } from 'react-native-safe-area-context'



const Signup = ({navigation}) => {

    const onSignUp = () => {
        navigation.navigate("Signup")
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (

        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign In"/>
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
        </SafeAreaView>
    )
}

export default React.memo(Signup);