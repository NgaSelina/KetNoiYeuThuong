import React from "react";
import { SafeAreaView,  TextInput, Text,  Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import Logo from "../loginscreen/logo.svg";

const Registerscreen = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <Logo style={styles.logo} ></Logo>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Họ và tên"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Email hoặc Số điện thoại"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mật khẩu"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext} onPress = { () => {navigate('Login')}}>Đăng nhập</Text>
      </TouchableOpacity>

      <View style={styles.taikhoan}>
        <Text style={styles.texttaikhoan}>Bạn có tài khoản chưa?</Text>
        <TouchableOpacity>
        <Text style={styles.dangky} onPress = { () => {navigate('Login')}} >Đăng nhập</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.hoac}>- Hoặc đăng nhập với -</Text>

      <View style={styles.loginand}>
        <TouchableOpacity>
        <Image style={styles.google} resizeMode="contain" source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"}}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.facebook} resizeMode="contain" source={{uri: "https://anh.eva.vn/upload/4-2016/images/2016-11-30/1480494815-facebook-sao-viet.png"}}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Registerscreen;