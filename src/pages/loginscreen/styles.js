
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    logo: {
        width: 166,
        height: 49,
        marginTop: 54,
        alignSelf: 'center',
        //marginBottom: 42,
      },
      
    input: {
        height: 50,
        width: 328,
        //top: 42,
        marginTop: 18,
        borderWidth: 1,
        paddingLeft: 25,
        borderRadius: 10,
        //margin: 9,
        alignSelf: 'center',
    },

    forgotpass: {
      fontSize: 14,
      marginLeft: 275,
      marginTop: 18,
      //top: 101,
      color: 'black',
    },
    button: {
        //height: 50,
        width: 328,
        alignSelf: 'center',
        marginTop: 32,
        //top: 130,
  
    },
    buttontext: {
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor:'green',
      paddingHorizontal: 128,
      paddingVertical: 15,
      color: 'white',
      borderRadius: 10,
    },
    texttaikhoan: {
      color: 'black',
      fontSize: 14,
    },
    dangky: {
      color: 'green',
      fontSize: 14,
      marginLeft: 10,
    },
    taikhoan: {
      flexDirection: 'row',
      left: 31,
      marginTop: 18,
      //top: 152,
    },
    hoac: {
      fontSize: 14,
      color: 'black',
      marginTop: 43,
      //top: 199,
      alignSelf: 'center',
    },
    google: {
      width: 34,
      height: 34,
  
    },
    facebook: {
      width: 38,
      height: 38,
      marginLeft: 30,
      borderRadius: 50,
  
    },
    loginand: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 18,
      //top: 210,
    },
    setup: {
        //borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon1: {
        width: 30,
        height: 30,
    },
    laylaipass: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 35,
        alignSelf: 'center',
    },
      neubanquenpass: {
      color: 'black',
      fontSize: 14,
      marginTop: 18,
      alignSelf: 'center',
    },
    under: {
        width: 20,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color:'black',
        borderColor:'black',
    },

    underonclick: {
        borderColor: "red",
    },
  });
  export default styles;