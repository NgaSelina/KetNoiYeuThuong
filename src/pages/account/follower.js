import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import Back from "../account/svg/back.svg";
import styles from "./followerStyles";

const follower = () => {

    const { navigate, goBack } = useNavigation();

    const [isStatus1, setStatus1] = React.useState(true);
    const [isStatus2, setStatus2] = React.useState(true);
    const [isStatus3, setStatus3] = React.useState(true);
    const [isStatus4, setStatus4] = React.useState(true);
    const [isStatus5, setStatus5] = React.useState(true);

    return(
        <SafeAreaView>
            <View style = {styles.viewHead}>
                <TouchableOpacity onPress = { () => {goBack()}}>
                    <Back style = {styles.ArrowBack}/>
                </TouchableOpacity> 
                <Text style={styles.TranTrungGioi}>Trần Trung Giới</Text>
            </View>

            <View style = {styles.viewMenuTabTop}>
                <TouchableOpacity style={styles.TouchMenuTabTopFollowing} onPress = { () => {navigate('following')}}>
                        <Text style = {styles.MenuTabTopFollowing}>5 người đang theo dõi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchMenuTabTop} >
                    <Text style = {styles.MenuTabTop}>Theo dõi 5 người</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.bodyListFollow}>
                <Image style = {styles.avatar} source={require('../account/svg/avt1.png')}></Image>
                <Text style = {styles.name}>Jacob Ginnish</Text>
                <TouchableOpacity onPress={() => {setStatus1(!isStatus1)}}>
                    {
                        isStatus1 ?
                        <Text style = {styles.UnFollow}>Bỏ theo dõi</Text>
                        : 
                        <Text style = {styles.Following}>Theo dõi</Text>
                    }
                </TouchableOpacity>
            </View>

            <View style = {styles.bodyListFollow}>
                <Image style = {styles.avatar} source={require('../account/svg/avt2.png')}></Image>
                <Text style = {styles.name}>Bette Davis</Text>
                <TouchableOpacity onPress={() => {setStatus2(!isStatus2)}}>
                    {
                        isStatus2 ?
                        <Text style = {styles.UnFollow}>Bỏ theo dõi</Text>
                        : 
                        <Text style = {styles.Following}>Theo dõi</Text>
                    }
                </TouchableOpacity>
            </View>

            <View style = {styles.bodyListFollow}>
                <Image style = {styles.avatar} source={require('../account/svg/avt3.png')}></Image>
                <Text style = {styles.name}>Cary Grant</Text>
                <TouchableOpacity onPress={() => {setStatus3(!isStatus3)}}>
                    {
                        isStatus3 ?
                        <Text style = {styles.UnFollow}>Bỏ theo dõi</Text>
                        : 
                        <Text style = {styles.Following}>Theo dõi</Text>
                    }
                </TouchableOpacity>
            </View>

            <View style = {styles.bodyListFollow}>
                <Image style = {styles.avatar} source={require('../account/svg/avt4.png')}></Image>
                <Text style = {styles.name}>James Stewart</Text>
                <TouchableOpacity onPress={() => {setStatus4(!isStatus4)}}>
                    {
                        isStatus4 ?
                        <Text style = {styles.UnFollow}>Bỏ theo dõi</Text>
                        : 
                        <Text style = {styles.Following}>Theo dõi</Text>
                    }
                </TouchableOpacity>
            </View>

            <View style = {styles.bodyListFollow}>
                <Image style = {styles.avatar} source={require('../account/svg/avt5.png')}></Image>
                <Text style = {styles.name}>Audrey Hepburn</Text>
                <TouchableOpacity onPress={() => {setStatus5(!isStatus5)}}>
                    {
                        isStatus5 ?
                        <Text style = {styles.UnFollow}>Bỏ theo dõi</Text>
                        : 
                        <Text style = {styles.Following}>Theo dõi</Text>
                    }
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default follower;

