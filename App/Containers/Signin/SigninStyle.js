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


	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	text: {
		fontStyle: 'italic',
		textDecorationLine: 'underline',
	},
	  title:{alignSelf:"center",
            fontSize:30,fontStyle:"italic",
            textDecorationLine:"underline"
        },
	logo: {
		alignSelf: 'center',
		top: 50,
		marginVertical: 20,
		width: 200,
		height: 200,
	    borderRadius:100
	},
	button: {
		marginVertical: 20,
		height: 57,
		justifyContent: 'center',
		alignItems: 'center',
        borderRadius:20,
		backgroundColor: '#5c87dd',
	},
	formContainer: {
		alignSelf: 'center',
	},
})
