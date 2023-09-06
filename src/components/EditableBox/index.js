import React from "react"
import { Image, Text, TextInput, View } from "react-native"
import { styles } from "./styles"

const EditableBox = ({value, label, editable, onChangeText}) => {
    return (
       <View style={[styles.container]}>
                <Text style={styles.label}>{label}</Text>            
                <TextInput editable={editable} onChangeText={onChangeText} value={value} style={styles.input}/>
        </View>
    )
}
export default React.memo(EditableBox)