import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import Back from "./FileSVG/back.svg";
import Next from "./FileSVG/next.svg";
import Noti from "./FileSVG/noti.svg";
import Infor from "./FileSVG/infor.svg";

const Setup01 = () => {

    const { navigate, goBack } = useNavigation();

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <View style={styles.setup}>
                <TouchableOpacity onPress = { () => {goBack()}}>
                    <Back style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Cài đặt tài khoản</Text>
            </View>
            
            <TouchableOpacity style={styles.setup} onPress = { () => {navigate('setup02')}}>
                <Infor style={styles.icon}/>
                <Text style={styles.text1}>Thông tin cá nhân</Text>
                <Next style={styles.icon}/>   
            </TouchableOpacity>
            <TouchableOpacity style={styles.setup} onPress = { () => {navigate('setupnote')}}>
                <Noti style={styles.icon}/>
                <Text style={styles.text1}>Cài đặt thông báo</Text>
                <Next style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.setup} onPress = { () => {navigate('Login')}}>
             <Text style={styles.logout}>Đăng xuất</Text>
            </TouchableOpacity>

            
        </SafeAreaView>
    );

};



export default Setup01;