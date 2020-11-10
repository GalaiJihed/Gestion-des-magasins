import { Dimensions } from 'react-native'
import  Colors  from '../../constants/Colors'

export default {
    cardContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title:{alignSelf:"center",
        fontSize:30,fontStyle:"italic",
        textDecorationLine:"underline"
    },
    coverContainer: {
        position: 'relative',
    },
    coverImage: {
        height: Dimensions.get('window').width * (3 / 4),
        width: Dimensions.get('window').width,
        borderRadius:25
    },
    headerContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    scroll: {
        backgroundColor: '#FFF',
        flex: 1,
        marginBottom: 55,
    },
    Row: {
        margin: 25,
    },
    mainViewStyle: {
        flex: 1,
        flexDirection: 'column',
        flexGrow: 1,
    },
    coverMetaContainer: {
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: 'flex-end',
    },
    footer: {
        alignItems: 'center',
        backgroundColor: '#5c87dd',
        bottom: 0,
        flex: 0.1,
        flexDirection: 'row',
        height: 65,
        left: 0,
        position: 'absolute',
        right: 0,
    },
    buttonFooter: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    navigatorButton: {
        alignItems: 'flex-start',
        flex: 1,
        justifyContent: 'center',
    },
    navigatorText: {
        alignItems: 'flex-start',
        color: Colors.green,
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    borderCenter: {
        borderColor: '#FFA890',
        borderWidth: 0.5,
        height: 55,
    },
    textFooter: {
        alignItems: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    NameText: {
        color: Colors.black,
        fontSize: 36,
        fontWeight: '400',
        letterSpacing: 1,
        marginBottom: 5,
    },
    detailText: {
        color: Colors.black,
        fontSize: 22,
        fontWeight: '600',
        letterSpacing: 0.5,
        marginBottom: 4,
    },
    subDetailText: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: '100',
        letterSpacing: 0.5,
        lineHeight: 28,
    },
    text: {
        color: Colors.gray,
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: 1,
        marginBottom: 4,
    },
}
