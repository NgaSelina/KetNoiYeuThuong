import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles"

const profile = () => {

    const { navigate, goBack } = useNavigation();

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
            <TouchableOpacity style={styles.setup} onPress = { () => {navigate('setup01')}}>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://e7.pngegg.com/pngimages/557/991/png-clipart-computer-icons-setting-icon-desktop-wallpaper-android-thumbnail.png"}}/>
                <Text style={styles.text1}>Cài đặt tài khoản</Text>
                <Image style={styles.icon2} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_Yr9q0co3_aBUOpqf5oDI7VKUskywP2XidPOmi_mk8CYhwGUQdDHgxzoFF5w8Qd3keo&usqp=CAU"}}/>   
            </TouchableOpacity>
            <TouchableOpacity style={styles.setup}>
                <Image style={styles.icon1} resizeMode="contain" 
                source={{uri: "https://e7.pngegg.com/pngimages/217/1024/png-clipart-computer-icons-star-symbol-black-star-angle-heart-thumbnail.png"}}/>
                <Text style={styles.text1}>Đánh giá ứng dụng</Text>
                <Image style={styles.icon2} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_Yr9q0co3_aBUOpqf5oDI7VKUskywP2XidPOmi_mk8CYhwGUQdDHgxzoFF5w8Qd3keo&usqp=CAU"}}/> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.setup}>
            <Image style={styles.icon1} resizeMode="contain" 
                source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTTf4u8phdAfWyoFH6iYcSbqVd02oQOI5C_Hrcm88Kr6_9KupJe2QbJ03uJaXKY7vsKc&usqp=CAU"}}/>
                <Text style={styles.text1}>Trợ giúp</Text>
                <Image style={styles.icon2} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_Yr9q0co3_aBUOpqf5oDI7VKUskywP2XidPOmi_mk8CYhwGUQdDHgxzoFF5w8Qd3keo&usqp=CAU"}}/> 
            </TouchableOpacity>

            <View style={{flexDirection: 'row', justifyContent: 'space-around',width: '100%', backgroundColor: 'white', alignSelf: 'center', top: 100}}>
                <TouchableOpacity >
                    <Image style={styles.home} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCGnzhdGx9Ihn5TaNV1bWJ1mCSJ5oZJAQ9dKE10CGmGZ8oMIQ_7EfDgWHyhLloo12Xts&usqp=CAU"}}/>
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

export default profile;