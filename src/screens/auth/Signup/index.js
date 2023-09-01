import React, { useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { styles } from './styles'
import AuthHeader from '../../../components/AuthHeader'
import Input from '../../../components/input'
import Checkbox from '../../../components/Checkbox'
import Button from '../../../components/Button'
import Separator from '../../../components/Separator'
import GoogleLogin from '../../../components/GoogleLogin'



const Signup = () => {
    const [checked,setChecked] = useState(false)

    const onSignIn = () => {
        console.log("holas")
    }

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign Up"/>
            <Input placeholder={"John Doe"} label="Name"/>
            <Input placeholder={"example@gmail.com"} label="Email"/>
            <Input isPassword={true} placeholder={"*******"} label="Password"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            {/* a un componente que yo creo, si le quiero dar un style, tengo que hacer que reciba ese style por propiedad y despues esa propiedad pasarla al style de lo que quiero que lleve eese estilo */}
            <Button style={styles.button} title="Sign Up"  /> 
            <Separator title="Or sign up with"/>
            <GoogleLogin/>
            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}> Sign in</Text>
            </Text>

        </ScrollView>    
    )
}

export default React.memo(Signup);