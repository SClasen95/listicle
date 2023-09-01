import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./styles"

const AuthHeader = ({title,onPress}) => {

    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onPress}>
                <Image style={styles.image} source={require("../../assets/back.png")}/>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
export default React.memo(AuthHeader)