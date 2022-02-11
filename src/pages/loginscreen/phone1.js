import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import Logo from "../loginscreen/logo.svg";

const Phone1 = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const { navigate } = useNavigation();

  return (
    <SafeAreaView>

      <Logo style={styles.logo} ></Logo>
      <TouchableOpacity><Text style={styles.laylaipass} >Đặt lại mật khẩu</Text></TouchableOpacity>

      <TouchableOpacity><Text style={styles.neubanquenpass} >Tạo mật khẩu mới</Text></TouchableOpacity>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Nhập mật khẩu"
        value={text}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Nhập lại mật khẩu mới"
        keyboardType="numeric"
      />
      

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext} onPress = { () => {navigate('Login')}}>xác nhận</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   input: {
//     height: 50,
//     width: 360,
//     margin: 12,
//     borderWidth: 1,
//     paddingLeft: 25,
//     borderRadius: 10,
    
//   },
//   logo: {
//     width: 166,
//     height: 49,
//     marginTop: 54,
//     marginLeft: 97,
//     marginBottom: 42,
//   },
//   pass: {
//     fontSize: 14,
//     alignSelf: 'center',
//     marginBottom: 30,
//     marginTop: 10,
//     color: 'black',
//   },
//   pass1: {
//     fontSize: 14,
//     alignSelf: 'center',
//     marginBottom: 30,
//     marginTop: 10,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',

//   },
//   buttontext: {
//     fontStyle: 14,
//     fontStyle: 'bold',
//     backgroundColor:'green',
//     paddingHorizontal: 145,
//     paddingVertical: 15,
//     color: 'white',
//     borderRadius: 10,
//     marginTop: 10,
//   },
//   yesno: {
//     color: 'black',
//     fontSize: 14,
//   },
//   login: {
//     color: 'green',
//     fontSize: 14,
//     marginLeft: 10,
//   },
//   last: {
//     flexDirection: 'row',
//     marginLeft: 30,
//     marginTop: 10,
//   },
//   note: {
//     fontSize: 14,
//     color: 'black',
//     marginTop: 50,
//     marginLeft: 120,
//   },
//   google: {
//     width: 34,
//     height: 34,

//   },
//   facebook: {
//     width: 38,
//     height: 38,
//     marginLeft: 30,

//   },
//   ggfb: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 15,
//   },
// });

export default Phone1 ;