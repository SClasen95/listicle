import React, {useState} from "react"
import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./styles"

const API_BASE_URL = "https://listicle.deegeehub.com/api";
const ProductHomeItem = ({title, price, image, onPress}) => {
  return(
    <Pressable onPress={onPress} style={styles.container}>
      {console.log(`${API_BASE_URL}/${image?.path}`)}
        <Image style={styles.image} source={{uri: image}}/>
        {/* <Image style={styles.image} source={{uri: `${API_BASE_URL}/${image?.path}`}}/> */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        
    </Pressable>
  )
}
export default React.memo(ProductHomeItem)