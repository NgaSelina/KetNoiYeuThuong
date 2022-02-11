import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View } from "react-native";


const Setup01 = () => {


    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <View style={styles.setup1}>
                <TouchableOpacity >
                    <Image style={styles.icon1} 
                    resizeMode="contain" 
                    source={{uri: "https://e7.pngegg.com/pngimages/596/53/png-clipart-arrow-computer-icons-arrow-free-creative-pull-cdr-angle-thumbnail.png"}}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Trần Trung Giới</Text>
            </View>
            <View style={styles.head}>
                <Text style={styles.follow}>5 người đang theo dõi</Text>
                <Text style={styles.follow}>Theo dõi 5 người</Text>
            </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    follow: {
        fontSize: 14,
        flex: 0.45 ,
        alignItems: 'center',
        borderBottomWidth: 1,
        textAlign: 'center',
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
    icon1: {
        width: 30,
        height: 30,
        borderRadius:500,
        flex: 0.2
    },
    
});

export default Setup01;