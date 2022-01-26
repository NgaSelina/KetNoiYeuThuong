import {StyleSheet} from "react-native";

const styles =StyleSheet.create({
    viewHead:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
    },
    viewMenuTabTop:{
        flexDirection: 'row',
    },
    ArrowBack: {
        width: 16,
        height: 16,  
    },
    TranTrungGioi: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        flex: 1,
        textAlign: 'center',
    },
    MenuTabTop: {
        fontSize: 14,
        textAlign: 'center',
        color: 'green',
    },
    TouchMenuTabTop: {
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        paddingVertical: 12,
        width: '50%',
    },
    MenuTabTopFollowing: {
        fontSize: 14,
        textAlign: 'center',
        color: 'grey',
    },
    TouchMenuTabTopFollowing: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingVertical: 12,
        width: '50%',
    },
    bodyListFollow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50,
        
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        flex: 0.95,
        marginLeft: 11,
    },
    UnFollow: {
        fontSize: 14,
        color: 'black',
        padding: 5,
        borderWidth: 1,
        borderRadius: 20,
    },
    Following: {
        fontSize: 14,
        color: 'white',
        padding: 5,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 20,
        backgroundColor: 'green',

    },
});

export default styles;