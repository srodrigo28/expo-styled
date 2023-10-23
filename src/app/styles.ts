import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLabel: {
        paddingLeft: 15,
    },
    formTitle:{
        fontSize: 36,
        fontWeight: 'bold',
        color: 'blueviolet',
        margin: 10,
    },
    formInput: {
        borderColor: 'blueviolet',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        minWidth: '80%',
        padding: 10,
        margin: 10
    },
    buttonContent: {
        height: 50,
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        minWidth: '30%',
        backgroundColor: 'blueviolet',
        padding: 10,
        alignItems: "center",
        borderRadius: 7,
        marginBottom: 7
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})