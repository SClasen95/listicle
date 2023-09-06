import React from 'react'
import {View, FlatList, Text} from 'react-native'
import { styles } from './styles'
import {SafeAreaView} from 'react-native-safe-area-context'
import { products } from '../../../data/products'
import ProductFavoriteItem from '../../../components/ProductFavoriteItem'
import Header from '../../../components/Header/index'

const Favorites = ({navigation}) =>{

    const renderItem = ({item}) => {
        const onProductPress =()=>{
            navigation.navigate('ProductDetails',{product: item})
        }
        return(
            <ProductFavoriteItem onPress={onProductPress} {...item}/>
        )
    }
    return (
        <SafeAreaView>
            <Header style={styles.header} title={"Favorites"}/>
                <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => String(item?.id)}/>

        </SafeAreaView>
    )
}

export default React.memo(Favorites)