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
    },
    TouchMenuTabTop: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingVertical: 12,
        width: '50%',
    },
    imageSubscribe: {
        width:329,
        height: 220,
        alignSelf: 'center',
        marginTop: 45,
    },
    noteSubscribe: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginTop: 20,
    },
    
});

export default styles;