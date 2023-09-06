import { colors } from "../../utils/colors";

const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        flex: 1
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold",

    }
})

