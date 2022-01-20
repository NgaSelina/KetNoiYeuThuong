import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    home: {
        width: 30,
        height: 30,
        borderRadius:200,
        alignSelf: 'center',
    },
    setup: {
        borderBottomWidth: 1,
        width: 360,
        alignSelf: 'center',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'grey',
    },
    text1: {
        fontSize: 14,
        color: 'black',
        flex: 1,
        marginLeft: 17,
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    body: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: 107,
        width: 328,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    text: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'center',
        top: 20,
    },
    
    icon: {
        width: 30,
        height: 30,
        borderRadius:200,
        
    },
    icon1: {
        width: 20,
        height: 20,
        borderRadius:500,
        alignSelf: 'center',
        //flex: 0.2
    },
    icon2: {
        width: 7.4,
        height: 12,
        borderRadius:500,
        flex: 0.2
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 200,
    },
    hoten:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    addr:{
        fontSize: 14,
        color: 'black',
        marginTop: 8,
    },
    xemtk:{
        fontSize: 14,
        color: 'green',
        marginTop: 8,
    },
    logout:{
        fontSize: 14,
        color: 'red',
    },
    verticleLine:{
        height: '50%',
        width: 1,
        backgroundColor: 'grey',
    },
    ridesFriends: {
        marginTop: 20,
        width: 120,
        height: 62,
        alignItems: 'center',
        flexDirection: 'row',
       // justifyContent: 'space-around',
        width: '100%',
    },
    numbers: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    },
    status:{
        fontSize: 14,
        color: 'grey',
        textAlign: 'center',
        marginTop: 4,
    },
    name: {
        fontSize: 14,
        color: 'green',
        marginLeft: 40,
        marginTop: 20,
    },
    input: {
        height: 50,
        width: 328,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        paddingLeft: 15,
        marginTop: 10,
        alignSelf: 'center',
    },
    inputphone: {
        height: '100%',
        width: '80%',
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        paddingLeft: 15,
        alignSelf: 'center',
    },
    infor: {
        fontSize: 12,
        color: 'black',
        marginLeft: 40,
        marginTop: 20,
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 10,
        marginTop: 20,
        width: 328,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    verify: {
        fontSize: 30,
        color: 'black',
        marginTop: 20,
        //marginBottom: 20,
        alignSelf: 'center'
    },
    noteverify: {
        fontSize: 14,
        color: 'grey',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    inputbody: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: 328,
        height: 50,
        alignSelf: 'center',
    },
    sdt: {
        flexDirection: 'row',
        backgroundColor: '#E5E5E5',
        width: '20%',
        justifyContent: 'center',
        borderRadius: 10,
    },
    under: {
        width: 50,
        height: 50,
        borderWidth: 1,
        color:'black',
        borderColor:'black',
        backgroundColor:'#E5E5E5',
    },
    underonclick: {
        borderColor: "red",
    },
    send: {
    fontSize: 14,
    color: 'green',
    alignSelf: 'center',
    marginLeft: 10,
    marginTop: 20,

    },
});
export default styles;
