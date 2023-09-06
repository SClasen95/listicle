import React, { useState } from 'react'
import { ActivityIndicator, Image, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import { styles } from './styles'
import {SafeAreaView} from 'react-native-safe-area-context'
import Header from '../../../components/Header'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Input from '../../../components/input'
import { categories } from '../../../data/categories'
import Button from '../../../components/Button'

const CreateListing = ({navigation}) =>{

    const [images,setImages] = useState([])
    const [values,setValues] = useState({})
    const [loading,setLoading] = useState(false)

    const goBack = () => {
        navigation.goBack()
    }
    const uploadNewImage = async () =>{
        setLoading(true)
        const result = await launchImageLibrary()
        if(result?.assets?.length){
            setImages(list => ([...list, ...result?.assets]))
        }
        setLoading(false)
    }
    const onDeleteImage = (image) =>{
        setImages((list)=>{ //list es una lista cualquera para esta funcion. En este caso, la lista es la lista de imagenes creada en el state al principio
            const filteredImages = list.filter(i => i?.fileName!==image.fileName)
            return filteredImages
        })
    }
    const onChange = (key,value) => {
        setValues((val) => ({...val,[key]: value}))
    }
    return (
        <SafeAreaView>
            <Header showBack onBackPress={goBack} style={styles.header} title="Create a new listing"/>
                <ScrollView style={styles.container}>
                    <KeyboardAvoidingView behavior='padding'> 
                    <Text style={styles.sectionTitle}>Upload Photos</Text>

                    <View style={styles.imageRow}>
                        <TouchableOpacity disabled={loading} style={styles.uploadContainer} onPress={uploadNewImage}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadPlus}>+</Text>
                            </View>
                        </TouchableOpacity>

                        {images?.map(image => (
                            <View style={styles.imageContainer} key={image?.fileName}>
                                <Image style={styles.image} source={{uri: image?.uri}}/>
                                <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                                    <Image style={styles.delete} source={require('../../../assets/close.png')}/>
                                </Pressable>
                            </View>
                            ))}
                        {loading ? (
                            <ActivityIndicator/>
                            ) : null}
                    </View>
                    <Input label="Title" placeholder="Listing Title" value={values.title} onChangeText={(v) => onChange('title',v)}/>
                    <Input label="Category" placeholder="Select the category" type="picker" value={values.category} onChangeText={(v) => onChange('category',v)} options={categories}/>
                    <Input label="Price" placeholder="Enter price in USD" value={values.price} onChangeText={(v) => onChange('price',v)} keyboardType='numeric'/>
                    <Input style={styles.textArea} label="Description" placeholder="Tell us more..." value={values.description} onChangeText={(v) => onChange('description',v)} multiline textAlignVertical='top'/>
                </KeyboardAvoidingView> 
                <Button title="Submit" style={styles.button} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(CreateListing)