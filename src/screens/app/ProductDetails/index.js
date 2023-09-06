import React from 'react'
import { Image, Linking, Pressable, ScrollView,Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import Button from '../../../components/Button'
import ImageCarousel from '../../../components/ImageCarousel'

const ProductDetails = ({navigation, route}) => {
    
    
    // const product = route?.params.product //Asii se recibe lo envado por la otra pantalla
    const {product} = route?.params || {} //o asi, esta es la forma destructurando el objeto
    
    const onBackPress = () => {
        navigation.goBack()
    }
    const onContact = () => {
        //Make a phone call
        const phone = '1124946666'
        Linking.openURL(`tel:${phone}`)

        //Send email
        const email = 'simonclasen1@outlook.com'
        Linking.openURL(`mailto:${email}`)
    }

    return(
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                {product?.images?.length ? (
                    <ImageCarousel style={styles.list} images={product?.images}/>
                ):(
                    <Image style={styles.image} source={{uri: product.image}}/>
                )}
                <View style= {styles.content}>
                    <Text style= {styles.title}>{product?.title}</Text>
                    <Text style= {styles.price}>{product?.price}</Text>
                    <Text style= {styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/back2.png')}/>
                </Pressable>
            </ScrollView>
            <View style= {styles.footer}>
                <Pressable style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={require('../../../assets/tabs/favorites.png')}/>
                </Pressable>
                <Button onPress={onContact} title="Contact Seller" />
            </View>
        </SafeAreaView>
    )
}

export default React.memo(ProductDetails)