import React, { useState } from "react";
import { TextInput, View, Text, Pressable, Image, Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Input = ({label, type, options, isPassword, value, onChangeText, placeholder, style, ...props}) =>{ //Esto de...props hace que "herede" todas las propeidades genericas
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPickerModalVisible, setisPickerModalVisible] = useState(false)

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }
    const onSelect = (opt) => {
        onChangeText(opt)
        setisPickerModalVisible(false)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === 'picker' ? (
                <Pressable onPress={() => setisPickerModalVisible(true)} style={styles.inputContainer}>
                    {value ? (
                        <Text style={[styles.input, style]}>{value?.title}</Text>
                    ):(
                        <Text style={[styles.placeholder, style]}>{placeholder}</Text>
                    )}
                    <Image style = {styles.arrow} source={require('../../assets/back2.png')}/>
                </Pressable>
            ):(                
                <View style={styles.inputContainer}>
                                                                                                {/*Y de esta manera le doy todas las propiedads "genericas" al input*/}
                    <TextInput value={value} placeholder={placeholder} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} style={[styles.input, style]} {...props}/> 
                    {isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image style = {styles.eye} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')}/>
                        </Pressable>
                    ) : null}
                </View>
            )}
            <Modal transparent visible={isPickerModalVisible}>
                <TouchableOpacity activeOpacity={1} onPress={()=>setisPickerModalVisible(false)} style={styles.modalWrapper}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                        <Text style={styles.headerTitle}>Select options</Text>
                        {options?.map(opt=>{
                            if(!opt?.id){
                                return null
                            }
                            const selected = value?.id === opt?.id
                            return(
                                <Text onPress={() => onSelect(opt) } style={[styles.optionText, selected ? styles.selectedOption : null]} key={opt?.title}>{opt?.title}</Text>
                                )                                
                        }                         
                        )}
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>

    )
}

export default React.memo(Input)