import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import OTPInputView from "@twotalltotems/react-native-otp-input";
import styles from "./styles";
import Logo from "../loginscreen/logo.svg";

const phone = () => {
  //const [text, onChangeText] = React.useState(null);
  //const [number, onChangeNumber] = React.useState(null);

  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <Logo style={styles.logo} ></Logo>
      
      <Text style={styles.laylaipass}>Nhập mã OTP để xác nhận</Text>

      <Text style={styles.neubanquenpass}>Mã OTP sẽ được gửi đến số điện thoại{"\n"}      đăng ký của bạn trong vài giây</Text>

    <OTPInputView style={{width:'50%', height: '10%', alignSelf: 'center'}}
          pinCount={6}
          codeInputFieldStyle={styles.under}
          codeInputHighlightStyle={styles.underonclick}
        />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext} onPress = { () => {navigate('Phone1')}} >Xác nhận</Text>
      </TouchableOpacity>

      
      
    </SafeAreaView>
  );
};


export default phone;