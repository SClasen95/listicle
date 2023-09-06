import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        marginBottom: 20
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500'
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 14,
        borderColor: colors.grey,
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    }, 
    arrow:{
        width: 24,
        height: 24,
        marginHorizontal: 16,
        transform: [{rotate:'270deg'}]
    },
    placeholder:{
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.lightGrey
    },
    modalWrapper:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems:'center',
        flex:1
    },
    modalContent: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding:16,
        width: '80%'
    },
    headerTitle:{
        color: colors.black,
        marginBottom:16,
        fontSize: 16
    },
    optionText: {
        color: colors.black,
        paddingVertical:4,
        fontSize: 16,
    },
    selectedOption:{
        color: colors.blue,
        fontWeight: 'bold'
    }
})