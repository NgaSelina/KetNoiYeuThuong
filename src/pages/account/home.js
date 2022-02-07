import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Back from "../account/svg/back.svg";
import Subscribe from "../account/svg/subscribe.svg";
import styles from "./Styles/homeStyles";
import { useNavigation } from '@react-navigation/native';

const home = () => {

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
                <TouchableOpacity style={styles.TouchMenuTabTop} onPress = { () => {navigate('following')}}>
                    <Text style = {styles.MenuTabTop}>5 người đang theo dõi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchMenuTabTop} onPress = { () => {navigate('follower')}}>
                    <Text style = {styles.MenuTabTop}>Theo dõi 5 người</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Subscribe style = {styles.imageSubscribe}/>
            </TouchableOpacity>

            <Text style = {styles.noteSubscribe}>Bạn chưa theo dõi ai</Text>

        </SafeAreaView>
    );
};

export default home;

