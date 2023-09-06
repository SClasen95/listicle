import { colors } from "../../utils/colors";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal:16,
        paddingVertical: 12,
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
    label:{
        color: colors.grey,
        fontSize: 12,
        marginBottom: 6,
    },
    input:{
        color: colors.blue,
        fontWeight: '400'
    }

    
})

