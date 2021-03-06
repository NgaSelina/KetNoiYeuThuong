import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"
import Logo from "../loginscreen/logo.svg";

const Loginscreen = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  console.log('áarsasas');
  const { navigate } = useNavigation();
  const [isSecureText, setSecureText] = React.useState(true);

  return (
    <View >
      <Logo style={styles.logo} ></Logo>
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
          maxLength={5}
          secureTextEntry={isSecureText}
        />

        {/* <TouchableOpacity
          style={{ flexDirection: 'row', width: 24, height: 24, position: 'absolute', top: 20, right: 30 }} onPress={() => { setSecureText(!isSecureText) }}>

          {!isSecureText ?

            <Image style={{ width: '100%', height: '100%' }} resizeMode="contain" source={{ uri: 'https://icons.iconarchive.com/icons/iconsmind/outline/256/Eye-2-icon.png' }} />
            : <Image style={{ width: '100%', height: '100%' }} resizeMode="contain" source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMD3IcMCiSshEopomEAVcP--CPjx9lvVDlw&usqp=CAU' }} />}
        </TouchableOpacity> */}
      
      
      
      <TouchableOpacity><Text style={styles.forgotpass} onPress = { () => {navigate('Forget')}}>Quên mật khẩu</Text></TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress = { () => {navigate('profile')}} >
        <Text style={styles.buttontext}>Đăng nhập</Text>
      </TouchableOpacity>

      <View style={styles.taikhoan}>
        <Text style={styles.texttaikhoan}>Bạn đã có tài khoản?</Text>
        <TouchableOpacity>
        <Text style={styles.dangky} onPress = { () => {navigate('Register')}} >Đăng ký</Text>
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

      
    </View>
  );
};



export default Loginscreen ;