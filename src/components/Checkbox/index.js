import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

const Checkbox = ({title, onCheck, checked}) => {

    return (       
        <TouchableOpacity activeOpacity={0.8} onPress={()=>onCheck(!checked)} style={styles.container}> 
        {checked ? (
            <View style={styles.innerContainer}>
                <Image style={styles.checkIcon} source={require('../../assets/check.png')}/>                
            </View>
        ) : null}
        </TouchableOpacity>
    )
}
export default React.memo(Checkbox)