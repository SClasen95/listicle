import React from "react"
import { Pressable, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

const Button = ({title,onPress, style}) => {

    return (
        //El boton Pressable tiene la propiedad hitslop, que permite hacer que el area "cliqueable" sea mas grande de lo que el boton muestra. Sirve para botones muy chiquitos
        // <Pressable hitSlop={24} onPress={handlePress} style={styles.container}> 
        //     <Text>{title}</Text>
        // </Pressable>

        //El boton TouchableOpacity no tene la propiedad hitSlop, pero al cliquearlo tiene un efecto, lo cual esta bueno para btnes mas grandes. activeOpacity controla q tan fuerte es el efecto
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.container, style]}> 
        <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

//Esto de react.memo lo q hace es que no vuelva a cargar el componente CADA vez que algo cambia en la vista, si no tiene que ver con el componente.
export default React.memo(Button)