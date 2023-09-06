import { colors } from "../../utils/colors";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:16,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 4,

    },
    content:{
        flexDirection: 'column',
        
    },
    title:{
        color: colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitle:{
        color: colors.grey,
        fontSize: 12,
        marginTop: 6
    },
    arrow:{
        width: 32,
        height: 32,
        transform: [{scaleX: -1}]
    }
    
})

