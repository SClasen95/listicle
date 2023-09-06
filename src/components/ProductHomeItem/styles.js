import { colors } from "../../utils/colors";
import { StyleSheet, Dimensions } from 'react-native'

const{width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
       margin: 8,
    },
    title: {
       color: colors.textGrey,
       paddingVertical: 8
    },
    image: {
        width: (width-48)/2,
        height: 220,
        borderRadius: 8,
    },
    price: {
        color: colors.black,
        fontWeight: 'bold',
        paddingBottom: 8
    }
})

