import { colors } from "../../utils/colors";

const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    line:{
        backgroundColor: colors.lightGrey,
        height: 1,
        flex: 1
    },
    text:{
        color: colors.blue,
        fontWeight: '500',
        marginHorizontal: 8,
    }
})

