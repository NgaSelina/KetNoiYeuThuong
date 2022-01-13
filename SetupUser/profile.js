import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";

const profile = () => {

    return(
        <SafeAreaView style={{backgroundColor: '#E5E5E5', height: '100%'}}>
            <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image style={styles.image} resizeMode="contain" source={{uri: "https://taimienphi.vn/tmp/cf/aut/hinh-nen-vit-avatar-anh-vit-cute-ngoc-nghech-1.jpg"}}/>

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
                    <Text style={styles.numbers}>10</Text>
                    <Text style={styles.status}>Theo dõi</Text>
                </View>
                <View style={styles.verticleLine}></View>
                <View style={{flex: 0.33}}>
                    <Text style={styles.numbers}>10</Text>
                    <Text style={styles.status}>Đang theo dõi</Text>
                </View>
            </View>
            <View style={styles.body}>

                <Text style={styles.text}>Đã xác minh</Text>
                
                <View style={{flexDirection: 'row', top: 40, justifyContent: 'space-around', width: '80%', marginLeft: 30}}>
                    <Image style={styles.icon} resizeMode="contain" source={{uri: "https://www.pngfind.com/pngs/m/414-4148205_orange-transparent-email-icon-light-blue-mail-icon.png"}}/>
                    <Image style={styles.icon} resizeMode="contain" source={{uri: "https://www.batdongsanhungphat.vn/wp-content/uploads/2021/08/kisspng-icon-phone-png-pic-5a753b39eeedd9.7165186815176323139787.jpg"}}/>
                    <Image style={styles.icon} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6KrfyDbi4NgR493df0RlpSp1cVgrTRWVVyWnVgJ8RjlwZaVVEJPNerUawhFl2qpumVI&usqp=CAU"}}/>
                    <Image style={styles.icon} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&usqp=CAU"}}/>
                </View>
            </View>
            <TouchableOpacity style={styles.setup}>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://e7.pngegg.com/pngimages/557/991/png-clipart-computer-icons-setting-icon-desktop-wallpaper-android-thumbnail.png"}}/>
                <Text style={styles.text1}>Cài đặt tài khoản</Text>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_Yr9q0co3_aBUOpqf5oDI7VKUskywP2XidPOmi_mk8CYhwGUQdDHgxzoFF5w8Qd3keo&usqp=CAU"}}/>   
            </TouchableOpacity>
            <TouchableOpacity style={styles.setup}>
                <Image style={styles.icon1} resizeMode="contain" 
                source={{uri: "https://e7.pngegg.com/pngimages/217/1024/png-clipart-computer-icons-star-symbol-black-star-angle-heart-thumbnail.png"}}/>
                <Text style={styles.text1}>Đánh giá ứng dụng</Text>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_Yr9q0co3_aBUOpqf5oDI7VKUskywP2XidPOmi_mk8CYhwGUQdDHgxzoFF5w8Qd3keo&usqp=CAU"}}/> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.setup}>
            <Image style={styles.icon1} resizeMode="contain" 
                source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTTf4u8phdAfWyoFH6iYcSbqVd02oQOI5C_Hrcm88Kr6_9KupJe2QbJ03uJaXKY7vsKc&usqp=CAU"}}/>
                <Text style={styles.text1}>Trợ giúp</Text>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_Yr9q0co3_aBUOpqf5oDI7VKUskywP2XidPOmi_mk8CYhwGUQdDHgxzoFF5w8Qd3keo&usqp=CAU"}}/> 
            </TouchableOpacity>

            <View style={{flexDirection: 'row', justifyContent: 'space-between',width: '100%', backgroundColor: 'white', alignSelf: 'center', marginTop: 90}}>
                <TouchableOpacity >
                    <Image style={styles.home} resizeMode="contain" source={{uri: "https://p.kindpng.com/picc/s/756-7562129_small-home-small-home-icon-png-transparent-png.png"}}/>
                    <Text style={styles.status}>Trang chủ</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.home} resizeMode="contain" source={{uri: "https://cdn.chanhtuoi.com/uploads/2021/09/w420/y-nghia-cua-cac-icon-trai-tim-jpg-1.jpg.webp"}}/>
                    <Text style={styles.status}>Cộng đồng</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.home} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmkp1af587eKOlK_r8VcjySOz6v-ARWdtQVrdlRfCzw554EgcWL-WevSsou69h8HJ_cQ&usqp=CAU"}}/>
                    <Text style={styles.status}>Tin nhắn</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.home} resizeMode="contain" source={{uri: "https://cdn.iconscout.com/icon/free/png-256/term-106119.png"}}/>
                    <Text style={styles.status}>Quản lý</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.home} resizeMode="contain" source={{uri: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}}/>
                    <Text style={styles.status}>Tài khoản</Text>
                </TouchableOpacity>
            </View>
                
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    home: {
        width: 40,
        height: 40,
        borderRadius:200,
    },
    setup: {
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text1: {
        fontSize: 14,
        color: 'black',
        flex: 0.7,
    },
    body: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: '20%',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
       
    },
    text: {
        fontSize: 14,
        color: 'grey',
        textAlign: 'center',
        top: 20,
    },
    config: {
        fontSize: 14,
        color: 'grey',
        top: 20,
        bottom: 20,
        //position: 'absolute',
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius:200,
    },
    icon1: {
        width: 30,
        height: 30,
        borderRadius:500,
        flex: 0.2
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 200,
    },
    hoten:{
        fontSize: 18,
        color: 'black',
    },
    addr:{
        fontSize: 14,
        color: 'black',
    },
    xemtk:{
        fontSize: 14,
        color: 'green',
    },
    verticleLine:{
        height: '50%',
        width: 1,
        backgroundColor: 'grey',
    },
    ridesFriends: {
        paddingTop: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        // alignSelf: 'center'
    },
      numbers: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
        //backgroundColor: 'pink',
    },
    status:{
        fontSize: 14,
        color: 'grey',
        textAlign: 'center'
        //backgroundColor: 'yellow'
    },
});

export default profile;