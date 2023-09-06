import React, {useState} from "react"
import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./styles"
import Input from "../input"


const Header = ({title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack, style}) => {

    const [showSearchInput,setShowSearchInput] = useState(false)

    const onSearchClick = () =>{
        setShowSearchInput(s => !s)
    }

    return (
        <View style={[styles.mainContainer, style]}>
            <View style={styles.container}>
            {showBack ? (
                <Pressable hitSlop={20} onPress={onBackPress}>
                    <Image style={styles.icon} source={require("../../assets/back2.png")}/>
                </Pressable>

            ) : (
                  showSearch ? (  
                     <Pressable hitSlop={20} onPress={onSearchClick}>
                        <Image style={styles.icon} source={require("../../assets/search.png")}/>
                    </Pressable>) : <View style={styles.space}/>
                )}
            <Text style={styles.title}>{title}</Text>

            {showLogout  ? (
                <Pressable hitSlop={20} onPress={onLogout}>
                    <Image style={styles.icon} source={require("../../assets/logout.png")}/>
                </Pressable>
            ) : <View style={styles.space}/>}
            </View>
            {showSearchInput ? (
                <Input onChangeText={onSearch} value={keyword} placeholder={"Type your keyword..."}/>
            ) : null}
        </View>
    )
}
export default React.memo(Header)