import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const phone1 = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const { navigate } = useNavigation();

  return (
    <SafeAreaView>

      <Image style={styles.logo} resizeMode="contain" source={{uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1642377600&Signature=NyYuEauHy5gCxcocLEYX2i8DHdYKdZdw6DUdf3y4VnejgIwdqfajmWu~NvKGwdUVM694hyA0dgJTzC6BsfsB27jFaDYnjt6SUjnzQhwNmkY0nrn4sTLGPxWfkRaskvsiBTeV30f7derrE5I7HfV9Aiv~lW-QS757OF52mZS1IjXN~6GwQ~Cea2E4HwowzJO3497OthDlRfL-abqrRT08b-rIvopbLDJIzF61Puz0ABg29POPD24tE5uX5iu5tCdwU8jjHLKOPEOe-KhNJ~IDGhmCPuTLjoU3Rm6dixtFa1iKiEqaiHeNjptGf~AEiUbeAD-HkvzY4wWyK20~Li3xxg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}}></Image>
      
      <TouchableOpacity><Text style={styles.pass1} >Đặt lại mật khẩu</Text></TouchableOpacity>

      <TouchableOpacity><Text style={styles.pass} >Tạo mật khẩu mới</Text></TouchableOpacity>

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
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 10,
    color: 'black',
  },
  pass1: {
    fontSize: 14,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
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
    marginTop: 10,
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

export default phone1 ;