import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View, RecyclerViewBackedScrollViewBase } from "react-native";
import { useNavigation } from '@react-navigation/native';

const phone01 = () => {

    const [number, onChangeNumber] = React.useState(null);

    const { navigate, goBack } = useNavigation();

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>

            <TouchableOpacity style={styles.setup} onPress = { () => {goBack()}}>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://e7.pngegg.com/pngimages/596/53/png-clipart-arrow-computer-icons-arrow-free-creative-pull-cdr-angle-thumbnail.png"}}/>
            </TouchableOpacity>

            <Text style={styles.title}>Xác minh số điện thoại {"\n"}của bạn.</Text>
            <Text style={styles.title01}>Để tăng tính xác thực cho tài khoản, chúng tôi khuyên {"\n"}bạn nên nhập số điện thoại chính xác của mình.</Text>
            
            <View style={styles.inputbody}>
                <View style={styles.sdt}>
                    <Image style={styles.icon} resizeMode="contain" source={{uri: "https://cheohanoi.vn/la-co-do-sao-vang-xuat-hien-lan-dau-tien/imager_102.jpg"}}/>
                    <Text style={styles.title01}>+84</Text>
                </View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Nhập số điện thoại"
                />
            </View>

            <Text style={styles.title01}>Chúng tôi sẽ gửi tin nhắn có kèm OTP cho bạn qua số{"\n"}(+84)</Text>
            <TouchableOpacity 
            onPress = { () => {navigate('phone02')}}
            style={{backgroundColor: 'green',borderRadius: 10,justifyContent: 'center',marginTop: 20, height: '8%', width: '90%', alignItems: 'center', alignSelf: 'center'}}>
                <Text style={{fontSize: 14, color: 'white'}}>Tiếp tục</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '60%',
        backgroundColor: '#E5E5E5',
        padding: 5,
        marginLeft: 10,
        alignSelf: 'center',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
      },
    title: {
        fontSize: 30,
        color: 'black',
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center'
    },
    title01: {
        fontSize: 14,
        color: 'grey',
        alignSelf: 'center',

    },
    icon1: {
        width: 30,
        height: 30,
    },
    icon: {
        width: 18,
        height: 16,
        alignSelf: 'center',
    },
    sdt: {
        flexDirection: 'row',
        backgroundColor: '#E5E5E5',
        width: '20%',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    inputbody: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    setup: {
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        },
});

export default phone01;