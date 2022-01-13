import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";

const setup01 = () => {

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <View style={styles.setup1}>
                <TouchableOpacity>
                    <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://e7.pngegg.com/pngimages/596/53/png-clipart-arrow-computer-icons-arrow-free-creative-pull-cdr-angle-thumbnail.png"}}/>
                </TouchableOpacity>
                <Text style={styles.title}>Cài đặt tài khoản</Text>
            </View>
            
            <TouchableOpacity style={styles.setup}>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"}}/>
                <Text style={styles.text1}>Thông tin cá nhân</Text>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_Yr9q0co3_aBUOpqf5oDI7VKUskywP2XidPOmi_mk8CYhwGUQdDHgxzoFF5w8Qd3keo&usqp=CAU"}}/>   
            </TouchableOpacity>
            <TouchableOpacity style={styles.setup}>
                <Image style={styles.icon1} resizeMode="contain" 
                source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SlFpZ7cXXXIiCnM18uAgdQABXMeryWufm4-N1H7ZzTBChFEOzu2SYeBATrwGEkbKA38&usqp=CAU"}}/>
                <Text style={styles.text1}>Cài đặt thông báo</Text>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_Yr9q0co3_aBUOpqf5oDI7VKUskywP2XidPOmi_mk8CYhwGUQdDHgxzoFF5w8Qd3keo&usqp=CAU"}}/> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.setup}>
             <Text style={styles.text}>Đăng xuất</Text>
            </TouchableOpacity>

            
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    setup: {
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    setup1: {
        width: '90%',
        alignSelf: 'center',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        padding: 20,
        marginLeft: 30,
    },
    text1: {
        fontSize: 14,
        color: 'black',
        flex: 0.7,
    },
    text: {
        fontSize: 14,
        color: 'red',
        flex: 0.7,
    },
    icon1: {
        width: 30,
        height: 30,
        borderRadius:500,
        flex: 0.2
    },
    
});

export default setup01;