import { colors } from "../../utils/colors";

const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal: 24,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        width: 24,
        height: 24
    },
    space: {
        width:24,        
    }
})

