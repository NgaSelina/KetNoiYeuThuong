import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"

const phone1 = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const { navigate } = useNavigation();

  return (
    <SafeAreaView>

      <Image style={styles.logo} resizeMode="contain" source={{uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1643587200&Signature=Ol1RxUGeewLFHbfbzSzcu-U1xjJXQ6tQ50Cy712zrd3K0aCw2MuubDcUWMD3r3bedjCjbBFCWHMHle2EBHs7J9m7H356lpqTgd4ALXeMXA6bPUNIlihQsq~-IeG8QN8BHkj1HYPkBevBfd2XI9TIBf2oRj9-eY5OjwffpShAQChLl4nhe55QJtbz0V6P06c7Yr4WU57z4u-~~9APCu~K1~F9Obp5LHdmmNKnTyGzVxxBXZs6mitJLdRVanGPKOS-8TisrHLNgoHoR~pBHJNrGEhr2iEgyAKVukYDlWq9K8xHi~petJ2gl0gIxCS6XJ~Ric3~qsVwbLO-j9KsIRaaTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}}></Image>
      
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

export default phone1 ;