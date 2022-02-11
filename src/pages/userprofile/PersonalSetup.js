import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import Back from "./FileSVG/back.svg";

const Setup02 = () => {
    const [text, onChangeText] = React.useState("Trần trung Giới");
    const [number, onChangeNumber] = React.useState(null);
    const [text1, onChangeText1] = React.useState(null);

    const { navigate, goBack } = useNavigation();

  return (
    <SafeAreaView >
        <View style={styles.setup}>
            <TouchableOpacity onPress = { () => {goBack()}}>
                <Back style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>Thông tin cá nhân</Text>
        </View>
            <Text style={styles.name}>Tên của bạn *</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
        <Text style={styles.infor}>Ngày sinh</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="dd/mm/yyyy"
        />
        <Text style={styles.infor}>Số điện thoại</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Xác minh"
        />
        <Text style={styles.infor}>Email</Text>
        <TextInput
            style={styles.input}
            onChangeText1={onChangeText1}
            value={text1}
            placeholder="Xác minh"
        />
        <TouchableOpacity onPress = { () => {navigate('phone01')}} style={styles.button}>
            <Text style={{fontSize: 14, color: 'white'}}>Hoàn thành</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Setup02;