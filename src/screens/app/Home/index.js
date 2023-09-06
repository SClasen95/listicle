import React, {useState, useEffect} from 'react'
import {FlatList, ScrollView, Text, View} from 'react-native'
import { styles } from './styles'
import {SafeAreaView} from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import {categories} from '../../../data/categories'
import {products} from '../../../data/products'
import CategoryBox from '../../../components/CategoryBox/index'
import ProductHomeItem from '../../../components/ProductHomeItem'

const Home = ({navigation}) =>{

    const [selectedCategory,setSelectedCategory] = useState()
    const [keyword, setKeyword] = useState()
    const [filteredProduct, setFilteredProduct] = useState(products)

    useEffect(() => {
        if(selectedCategory && !keyword){
            const updatedProducts = products.filter((product) => product.category === selectedCategory) 
            setFilteredProduct(updatedProducts)
        }else if(selectedCategory && keyword){
            const updatedProducts = products.filter((product) => product.category === selectedCategory && product?.title?.toLowerCase().includes(keyword.toLowerCase())) 
            setFilteredProduct(updatedProducts)
        }else if(!selectedCategory && keyword){
            const updatedProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword.toLowerCase())) 
            setFilteredProduct(updatedProducts)
        }
        else if(!keyword && !selectedCategory){            
            setFilteredProduct(products)
        }
    }, [selectedCategory, keyword])



    const renderCategoryItem = ({item,index}) =>{
        return(
           <CategoryBox onPress={()=>setSelectedCategory(item?.id)} isSelected={item?.id === selectedCategory} title={item?.title} isFirst={index === 0} image={item?.image}/>
        )
    }


    const renderProductItem = ({item}) =>{
        const onProductPress = (product) => {
            navigation.navigate('ProductDetails', {product}) //Asi le mando info a la pantalla a la que navego
        }
        return (
            <ProductHomeItem  onPress={() => onProductPress(item)} {...item}/> //Esta sintaxis pasa todo el item y lo destructura en las distntas propiedades
        )
    }


    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header onSearch={setKeyword} keyword={keyword} showSearch={true} title='Find All You Need'/>
                <FlatList showsHorizontalScrollIndicator={false} style = {styles.list} horizontal={true} data={categories} renderItem={renderCategoryItem} keyExtractor={(item,index) => String(index)}/>
                <FlatList style={styles.productsList} data={filteredProduct} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)} numColumns={2} ListFooterComponent={<View style={{height:100}}/>}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Home)