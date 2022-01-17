import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"

const forgetpassword = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.setup} onPress = { () => {goBack()}}>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://e7.pngegg.com/pngimages/596/53/png-clipart-arrow-computer-icons-arrow-free-creative-pull-cdr-angle-thumbnail.png"}}/>
      </TouchableOpacity>

      <Image style={styles.logo} resizeMode="contain" source={{uri: "https://s3-alpha-sig.figma.com/img/99f8/a80e/33642431e9b5a27620ecc2316ca3b75d?Expires=1643587200&Signature=Ol1RxUGeewLFHbfbzSzcu-U1xjJXQ6tQ50Cy712zrd3K0aCw2MuubDcUWMD3r3bedjCjbBFCWHMHle2EBHs7J9m7H356lpqTgd4ALXeMXA6bPUNIlihQsq~-IeG8QN8BHkj1HYPkBevBfd2XI9TIBf2oRj9-eY5OjwffpShAQChLl4nhe55QJtbz0V6P06c7Yr4WU57z4u-~~9APCu~K1~F9Obp5LHdmmNKnTyGzVxxBXZs6mitJLdRVanGPKOS-8TisrHLNgoHoR~pBHJNrGEhr2iEgyAKVukYDlWq9K8xHi~petJ2gl0gIxCS6XJ~Ric3~qsVwbLO-j9KsIRaaTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}}></Image>
     
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

export default forgetpassword;