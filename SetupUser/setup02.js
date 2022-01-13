import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Image, Text, TouchableOpacity, View } from "react-native";

const setup02 = () => {
    const [text, onChangeText] = React.useState("Trần trung Giới");
    const [number, onChangeNumber] = React.useState(null);
    const [text1, onChangeText1] = React.useState(null);

  return (
    <SafeAreaView >
        <View style={styles.setup}>
            <TouchableOpacity>
                <Image style={styles.icon1} resizeMode="contain" source={{uri: "https://e7.pngegg.com/pngimages/596/53/png-clipart-arrow-computer-icons-arrow-free-creative-pull-cdr-angle-thumbnail.png"}}/>
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
        <TouchableOpacity style={{backgroundColor: 'green',borderRadius: 10,justifyContent: 'center', height: '12%', width: '90%', alignItems: 'center', alignSelf: 'center'}}>
            <Text style={{fontSize: 14, color: 'white'}}>Hoàn thành</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 65,
    margin: 20,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 20,
  },
  setup: {
    borderBottomWidth: 1,
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
  name: {
      fontSize: 14,
      color: 'green',
      marginLeft: 20,
  },
  infor: {
      fontSize: 14,
      color: 'black',
      marginLeft: 20,
  },
  icon1: {
    width: 30,
    height: 30,

},
});

export default setup02;