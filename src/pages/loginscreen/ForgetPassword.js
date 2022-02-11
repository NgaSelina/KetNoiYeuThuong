import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import Logo from "../loginscreen/logo.svg";

const Forgetpassword = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const { navigate, goBack } = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.setup} onPress = { () => {goBack()}}>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://e7.pngegg.com/pngimages/596/53/png-clipart-arrow-computer-icons-arrow-free-creative-pull-cdr-angle-thumbnail.png"}}/>
      </TouchableOpacity>

      <Logo style={styles.logo} ></Logo>
     
      <Text style={styles.laylaipass}>Lấy lại mật khẩu</Text>

      <Text style={styles.neubanquenpass}>  Nếu bạn quên mật khẩu vui lòng nhập {"\n"}Email hoặc số điện thoại tại đây để lấy lại </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Email hoặc Số điện thoại"
        value={text}
      />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext} onPress = { () => {navigate('Phone')}}>xác nhận</Text>
      </TouchableOpacity>

      
      
    </SafeAreaView>
  );
};

export default Forgetpassword;