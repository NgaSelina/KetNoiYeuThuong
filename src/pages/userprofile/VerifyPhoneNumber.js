import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View, RecyclerViewBackedScrollViewBase } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import Back from "./FileSVG/back.svg";
import Vietnam from "./FileSVG/vietnam.svg";

const Phone01 = () => {

    const [number, onChangeNumber] = React.useState(null);

    const { navigate, goBack } = useNavigation();

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>

            <TouchableOpacity style={styles.setup} onPress = { () => {goBack()}}>
                <Back style={styles.icon} />
            </TouchableOpacity>

            <Text style={styles.verify}>Xác minh số điện thoại {"\n"}của bạn.</Text>
            <Text style={styles.noteverify}>Để tăng tính xác thực cho tài khoản, chúng tôi khuyên {"\n"}bạn nên nhập số điện thoại chính xác của mình.</Text>
            
            <View style={styles.inputbody}>
                <View style={styles.sdt}>
                <Vietnam style={styles.icon1} />
                    <Text style={styles.noteverify}>+84</Text>
                </View>
                <TextInput
                    style={styles.inputphone}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Nhập số điện thoại"
                />
            </View>

            <Text style={styles.noteverify}>Chúng tôi sẽ gửi tin nhắn có kèm OTP cho bạn qua số{"\n"}(+84)</Text>
            <TouchableOpacity 
            onPress = { () => {navigate('phone02')}}
            style={styles.button}>
                <Text style={{fontSize: 14, color: 'white'}}>Tiếp tục</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

};

export default Phone01;