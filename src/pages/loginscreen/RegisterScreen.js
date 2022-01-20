import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"

const registerscreen = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <Image style={styles.logo} resizeMode="contain" source={{uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1643587200&Signature=Ol1RxUGeewLFHbfbzSzcu-U1xjJXQ6tQ50Cy712zrd3K0aCw2MuubDcUWMD3r3bedjCjbBFCWHMHle2EBHs7J9m7H356lpqTgd4ALXeMXA6bPUNIlihQsq~-IeG8QN8BHkj1HYPkBevBfd2XI9TIBf2oRj9-eY5OjwffpShAQChLl4nhe55QJtbz0V6P06c7Yr4WU57z4u-~~9APCu~K1~F9Obp5LHdmmNKnTyGzVxxBXZs6mitJLdRVanGPKOS-8TisrHLNgoHoR~pBHJNrGEhr2iEgyAKVukYDlWq9K8xHi~petJ2gl0gIxCS6XJ~Ric3~qsVwbLO-j9KsIRaaTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}}></Image>
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

export default registerscreen;