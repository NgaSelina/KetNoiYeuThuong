import React, {useState} from 'react';
import { SafeAreaView,TouchableOpacity, Image, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

import Back from "../account/svg/back.svg";

const DATA = [
  {
    id: '1',
    avatar: 'https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-avatar-dep-cho-con-gai-dai-dien-Facebook-Zalo-Tiktok.jpg',
    title: 'Jacon Ginnish',
    status: 'Bỏ theo dõi',
  },
  {
    id: '2',
    avatar: 'https://sunglasshutusa.com/anh-dai-dien-dep-cho-nu/imager_44.jpg',
    title: 'Bette Davis',
    status: 'Bỏ theo dõi',
  },
  {
    id: '3',
    avatar: 'https://freetuts.net/upload/product_series/images/2021/06/24/1350/Avatar-Dep-Nu%207.jpg',
    title: 'Cary Grant',
    status: 'Bỏ theo dõi',
  },
  {
    id: '4',
    avatar: 'https://freetuts.net/upload/product_series/images/2021/06/24/1350/Avatar-Dep-Nu%20(13).jpg',
    title: 'James Stewart',
    status: 'Bỏ theo dõi',
  },{
    id: '5',
    avatar: 'https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-avatar-dep-cho-con-gai-dai-dien-Facebook-Zalo-Tiktok.jpg',
    title: 'Jacon Ginnish',
    status: 'Bỏ theo dõi',
  },
];

const App = () => {

  const renderItem = ({ item }) => (
    <View style={styles.item}>
        <Image style = {styles.avatar} source={{uri: item.avatar}} resizeMode='cover'></Image>
        <Text style={styles.title}>{item.title}</Text>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
        <View style = {styles.viewHead}>
            <TouchableOpacity >
                <Back style = {styles.ArrowBack}/>
            </TouchableOpacity> 
            <Text style={styles.TranTrungGioi}>Trần Trung Giới</Text>
        </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    flex: 0.9,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    },
    viewHead:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
    },
    ArrowBack: {
        width: 16,
        height: 16,  
    },
    TranTrungGioi: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        flex: 1,
        textAlign: 'center',
    },
    UnFollow: {
        fontSize: 14,
        color: 'black',
        padding: 5,
        borderWidth: 1,
        borderRadius: 20,
    },
    Following: {
        fontSize: 14,
        color: 'white',
        padding: 5,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 20,
        backgroundColor: 'green',

    },
});

export default App;