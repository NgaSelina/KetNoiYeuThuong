import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View, RecyclerViewBackedScrollViewBase } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const phone02 = () => {

    const [number, onChangeNumber] = React.useState(null);

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>

            <TouchableOpacity style={styles.setup}>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://e7.pngegg.com/pngimages/596/53/png-clipart-arrow-computer-icons-arrow-free-creative-pull-cdr-angle-thumbnail.png"}}/>
            </TouchableOpacity>

            <Text style={styles.title}>Xác minh số điện thoại {"\n"}của bạn.</Text>
            <Text style={styles.title01}>Nhập mã OTP chúng tôi vừa gửi qua tin nhắn của bạn.</Text>

            <OTPInputView style={{width: '80%', height: '20%', alignSelf:'center'}}
                pinCount={6}
                //autoFocusOnLoad
                codeInputFieldStyle={styles.under}
                codeInputHighlightStyle={styles.underonclick}
            />

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.title01}>Chưa nhận được mã?</Text>
                <TouchableOpacity>
                    <Text style={styles.title02}>Gửi lại</Text>
                </TouchableOpacity>
            </View>
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
    under: {
        width: 50,
        height: 50,
        borderWidth: 1,
        color:'black',
        borderColor:'black',
        backgroundColor:'#E5E5E5',
      },
      underonclick: {
        borderColor: "red",
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
    title02: {
        fontSize: 14,
        color: 'green',
        alignSelf: 'center',
        marginLeft: 10

    },
    icon1: {
        width: 30,
        height: 30,
    },
    
    
});

export default phone02;