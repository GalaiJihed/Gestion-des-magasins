import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        flexDirection: 'row',
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    textInput: {
        marginVertical: 10,
        backgroundColor: 'rgba(255,182,193,0.5)',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title:{alignSelf:"center",
        fontSize:30,fontStyle:"italic",
        textDecorationLine:"underline"
    },
    text: {
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },
    logo: {
        alignSelf: 'center',
        top: 50,
        marginVertical: 20,
        width: 200,
        height: 200,
        borderRadius:100

    },

})
