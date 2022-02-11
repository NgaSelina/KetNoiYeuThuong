import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View, RecyclerViewBackedScrollViewBase } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import Back from "./FileSVG/back.svg";

const Phone02 = () => {

    const [number, onChangeNumber] = React.useState(null);
    const { navigate, goBack } = useNavigation();

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>

            <TouchableOpacity onPress = { () => {goBack()}} style={styles.setup}>
                <Back style={styles.icon} />
            </TouchableOpacity>

            <Text style={styles.verify}>Xác minh số điện thoại {"\n"}của bạn.</Text>
            <Text style={styles.noteverify}>Nhập mã OTP chúng tôi vừa gửi qua tin nhắn của bạn.</Text>

            <OTPInputView style={{width: '80%', height: '20%', alignSelf:'center'}}
                pinCount={6}
                //autoFocusOnLoad
                codeInputFieldStyle={styles.under}
                codeInputHighlightStyle={styles.underonclick}
            />

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.noteverify}>Chưa nhận được mã?</Text>
                <TouchableOpacity>
                    <Text style={styles.send}>Gửi lại</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            onPress = { () => {navigate('email01')}}
            style={styles.button}>
                <Text style={{fontSize: 14, color: 'white'}}>Tiếp tục</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

};



export default Phone02;