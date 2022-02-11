import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import styles from "./styles";

import Avatar from "../userprofile/FileSVG/avatar.svg";

import Mail from "./FileSVG/mail.svg";
import Call from "./FileSVG/call.svg";
import Facebook from "./FileSVG/facebook.svg";
import User from "./FileSVG/user.svg";

import Setup from "./FileSVG/setup.svg";
import Evaluate from "./FileSVG/evaluate.svg";
import Help from "./FileSVG/help.svg";
import Next from "./FileSVG/next.svg";

const profile = () => {

    const { navigate, goBack } = useNavigation();

    return(
        <SafeAreaView style={{backgroundColor: '#E5E5E5', height: '100%'}}>
            <View style={{flexDirection: 'row', marginTop: 20}}>
                <Avatar style={styles.image}/>

                <View style={{marginLeft: 20, justifyContent: 'center'}}>
                    <Text style={styles.hoten}>Trần Trung Giới</Text>

                    <Text style={styles.addr}>Hà Đông, Hà Nội</Text>

                    <TouchableOpacity>
                        <Text style={styles.xemtk}>Xem tài khoản như khách thăm</Text>
                    </TouchableOpacity>         
                </View>
            </View>

            <View style={styles.ridesFriends}>
                <View  style={{flex: 0.33}}>
                    <Text style={styles.numbers}>10</Text>
                    <Text style={styles.status}>Đã cho</Text>
                </View>
                <View style={styles.verticleLine}></View>
                <View style={{flex: 0.33}}>
                    <Text style={styles.numbers}>5</Text>
                    <Text style={styles.status}>Theo dõi</Text>
                </View>
                <View style={styles.verticleLine}></View>
                <View style={{flex: 0.33}}>
                    <Text style={styles.numbers}>5</Text>
                    <Text style={styles.status}>Đang theo dõi</Text>
                </View>
            </View>
            <View style={styles.body}>

                <Text style={styles.text}>Đã xác minh</Text>
                
                <View style={{flexDirection: 'row', top: 40, justifyContent: 'space-around', width: '80%', marginLeft: 30}}>
                    <Mail style={styles.icon}/>
                    <Call style={styles.icon}/>
                    <Facebook style={styles.icon}/>
                    <User style={styles.icon}/>
                </View>
            </View>
            <TouchableOpacity style={styles.setup} onPress = { () => {navigate('setup01')}}>
                <Setup style={styles.icon}/>
                <Text style={styles.text1}>Cài đặt tài khoản</Text>
                <Next style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.setup}>
                <Evaluate style={styles.icon}/>
                <Text style={styles.text1}>Đánh giá ứng dụng</Text>
                <Next style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.setup}>
                <Help style={styles.icon}/>
                <Text style={styles.text1}>Trợ giúp</Text>
                <Next style={styles.icon}/> 
            </TouchableOpacity>
            <View style = {{marginBottom: '1%'}}>
            
            </View>
                
        </SafeAreaView>
    );

};

export default profile;