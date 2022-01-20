import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View, RecyclerViewBackedScrollViewBase } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";

const phone01 = () => {

    const [number, onChangeNumber] = React.useState(null);
    const { navigate, goBack } = useNavigation();

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>

            <TouchableOpacity style={styles.setup} onPress = { () => {goBack()}}>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://e7.pngegg.com/pngimages/596/53/png-clipart-arrow-computer-icons-arrow-free-creative-pull-cdr-angle-thumbnail.png"}}/>
            </TouchableOpacity>

            <Text style={styles.verify}>Xác minh thư điện tử {"\n"}của bạn.</Text>
            <Text style={styles.noteverify}>Để tăng tính xác thực cho tài khoản, chúng tôi khuyên {"\n"}bạn nên nhập Email chính xác của mình.</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Nhập Email để xác thực"
                />

            <Text style={styles.noteverify}>Chúng tôi sẽ gửi Email xác thực qua Email này của bạn.</Text>
            <TouchableOpacity 
            onPress = { () => {navigate('email02')}}
            style={styles.button}>
                <Text style={{fontSize: 14, color: 'white'}}>Tiếp tục</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

};

export default phone01;