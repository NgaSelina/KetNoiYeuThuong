import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableOpacity, View, RecyclerViewBackedScrollViewBase } from "react-native";


const setupnote = () => {

    return(
        <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
            <View style={styles.setup1}>
                <TouchableOpacity>
                    <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://e7.pngegg.com/pngimages/596/53/png-clipart-arrow-computer-icons-arrow-free-creative-pull-cdr-angle-thumbnail.png"}}/>
                </TouchableOpacity>
                <Text style={styles.title}>Cài đặt tài khoản</Text>
            </View>
            <View style={styles.setup}>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw593D1xmTHdIHF9WB15niALdw7Yfwy4o3g674n2oIJdK8qZZemPGsJPe6dyGDw6AtelY&usqp=CAU"}}/>
                <Text style={styles.text1}>Tin nhắn</Text>
                
            </View>
            <View style={styles.setup}>
                <Image style={styles.icon1} resizeMode="contain" 
                source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkzMxB2gqTr_NJ_KOoS2z-jtI4z1ob4uZQyCCQJ2dDFBu0aFb1EwcKOVTRnUMBNpzCr4&usqp=CAU"}}/>
                <Text style={styles.text1}>Người theo dõi</Text>
                
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
    text1: {
        fontSize: 14,
        color: 'black',
        flex: 0.7,
    },
    
});

export default setupnote;