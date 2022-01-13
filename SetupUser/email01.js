import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View, RecyclerViewBackedScrollViewBase } from "react-native";

const phone01 = () => {

    const [number, onChangeNumber] = React.useState(null);

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>

            <TouchableOpacity style={styles.setup}>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://e7.pngegg.com/pngimages/596/53/png-clipart-arrow-computer-icons-arrow-free-creative-pull-cdr-angle-thumbnail.png"}}/>
            </TouchableOpacity>

            <Text style={styles.title}>Xác minh thư điện tử {"\n"}của bạn.</Text>
            <Text style={styles.title01}>Để tăng tính xác thực cho tài khoản, chúng tôi khuyên {"\n"}bạn nên nhập Email chính xác của mình.</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Nhập Email để xác thực"
                />

            <Text style={styles.title01}>Chúng tôi sẽ gửi Email xác thực qua Email này của bạn.</Text>
            <TouchableOpacity style={{backgroundColor: 'green',borderRadius: 10,justifyContent: 'center',marginTop: 20, height: '8%', width: '90%', alignItems: 'center', alignSelf: 'center'}}>
                <Text style={{fontSize: 14, color: 'white'}}>Tiếp tục</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '90%',
        backgroundColor: '#E5E5E5',
        padding: 10,
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 20,
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