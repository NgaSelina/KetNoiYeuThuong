import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const registerscreen = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <Image style={styles.logo} resizeMode="contain" source={{uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1642377600&Signature=NyYuEauHy5gCxcocLEYX2i8DHdYKdZdw6DUdf3y4VnejgIwdqfajmWu~NvKGwdUVM694hyA0dgJTzC6BsfsB27jFaDYnjt6SUjnzQhwNmkY0nrn4sTLGPxWfkRaskvsiBTeV30f7derrE5I7HfV9Aiv~lW-QS757OF52mZS1IjXN~6GwQ~Cea2E4HwowzJO3497OthDlRfL-abqrRT08b-rIvopbLDJIzF61Puz0ABg29POPD24tE5uX5iu5tCdwU8jjHLKOPEOe-KhNJ~IDGhmCPuTLjoU3Rm6dixtFa1iKiEqaiHeNjptGf~AEiUbeAD-HkvzY4wWyK20~Li3xxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}}></Image>
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
        <Text style={styles.buttontext}>Đăng nhập</Text>
      </TouchableOpacity>

      <View style={styles.last}>
        <Text style={styles.yesno}>Bạn có tài khoản chưa?</Text>
        <TouchableOpacity>
        <Text style={styles.login} onPress = { () => {navigate('Login')}} >Đăng nhập</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.note}>- Hoặc đăng nhập với -</Text>

      <View style={styles.ggfb}>
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

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 360,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 25,
    borderRadius: 10,
    
  },
  logo: {
    width: 166,
    height: 49,
    marginTop: 54,
    marginLeft: 97,
    marginBottom: 42,
  },
  pass: {
    fontSize: 14,
    marginLeft: 275,
    marginBottom: 30,
    marginTop: 10,
    color: 'black',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttontext: {
    fontStyle: 14,
    fontStyle: 'bold',
    backgroundColor:'green',
    paddingHorizontal: 145,
    paddingVertical: 15,
    color: 'white',
    borderRadius: 10,
    marginTop: 30,
  },
  yesno: {
    color: 'black',
    fontSize: 14,
  },
  login: {
    color: 'green',
    fontSize: 14,
    marginLeft: 10,
  },
  last: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 10,
  },
  note: {
    fontSize: 14,
    color: 'black',
    marginTop: 50,
    marginLeft: 120,
  },
  google: {
    width: 34,
    height: 34,

  },
  facebook: {
    width: 38,
    height: 38,
    marginLeft: 30,

  },
  ggfb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});

export default registerscreen;