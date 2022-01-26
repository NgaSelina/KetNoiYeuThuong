import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Back from "../account/svg/back.svg";
import styles from "./followerStyles";

const following = () => {

    const { navigate, goBack } = useNavigation();

    return(
        <SafeAreaView>
            <View style = {styles.viewHead}>
                <TouchableOpacity onPress = { () => {goBack()}}>
                    <Back style = {styles.ArrowBack}/>
                </TouchableOpacity> 
                <Text style={styles.TranTrungGioi}>Trần Trung Giới</Text>
            </View>

            <View style = {styles.viewMenuTabTop}>
                <TouchableOpacity style={styles.TouchMenuTabTop}>
                        <Text style = {styles.MenuTabTop}>5 người đang theo dõi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchMenuTabTopFollowing} onPress = { () => {navigate('follower')}} >
                    <Text style = {styles.MenuTabTopFollowing}>Theo dõi 5 người</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.bodyListFollow}>
                <Image style = {styles.avatar} source={require('../account/svg/avt1.png')}></Image>
                <Text style = {styles.name}>Jacob Ginnish</Text>
                
            </View>

            <View style = {styles.bodyListFollow}>
                <Image style = {styles.avatar} source={require('../account/svg/avt2.png')}></Image>
                <Text style = {styles.name}>Bette Davis</Text>
               
            </View>

            <View style = {styles.bodyListFollow}>
                <Image style = {styles.avatar} source={require('../account/svg/avt3.png')}></Image>
                <Text style = {styles.name}>Cary Grant</Text>
                
            </View>

            <View style = {styles.bodyListFollow}>
                <Image style = {styles.avatar} source={require('../account/svg/avt4.png')}></Image>
                <Text style = {styles.name}>James Stewart</Text>
                
            </View>

            <View style = {styles.bodyListFollow}>
                <Image style = {styles.avatar} source={require('../account/svg/avt5.png')}></Image>
                <Text style = {styles.name}>Audrey Hepburn</Text>
                
            </View>

        </SafeAreaView>
    );
};

export default following;

