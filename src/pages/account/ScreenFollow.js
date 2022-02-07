import * as React from 'react';
import {View, useWindowDimensions, TouchableOpacity} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Component from './componentFlatList';
<<<<<<< HEAD
import { SafeAreaView, TouchableOpacity,FlatList, Image, Text} from "react-native";
import styles from './Styles/ScreenFollowStyles'
import Back from "../account/svg/back.svg";
import data from './data';
import dataFollow from './dataFollow';

const SecondRoute = () => {
    return (
      <SafeAreaView>
        <View>
          {
            data.map(item => (
              <Component 
                key={item.id} 
                name={item.name}
                avatar={item.avatar}
                isFollow={item.isFollow}
                fromList={true} />))
          }
        </View>
      </SafeAreaView>
    );
  };

  

  const FirstRoute = () => {
    return (
      <SafeAreaView>
        <View>
          {
            dataFollow.map(item => (
              <Component 
                key={item.id} 
                name={item.name}
                avatar={item.avatar}
                isFollow={item.isFollow}
                fromList={false}
                 />))
          }
        </View>
      </SafeAreaView>
    );
  };
    
=======
import {SafeAreaView, StyleSheet, FlatList, Image, Text} from 'react-native';
import styles from './ScreenFollowStyles';
import Back from '../account/svg/back.svg';

const data = [
  {
    id: '1',
    avatar:
      'https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-avatar-dep-cho-con-gai-dai-dien-Facebook-Zalo-Tiktok.jpg',
    name: 'Jacon Ginnish',
    isFollow: false,
  },
  {
    id: '2',
    avatar: 'https://sunglasshutusa.com/anh-dai-dien-dep-cho-nu/imager_44.jpg',
    name: 'Bette Davis',
    isFollow: false,
  },
  {
    id: '3',
    avatar:
      'https://freetuts.net/upload/product_series/images/2021/06/24/1350/Avatar-Dep-Nu%207.jpg',
    name: 'Cary Grant',
    isFollow: false,
  },
  {
    id: '4',
    avatar:
      'https://freetuts.net/upload/product_series/images/2021/06/24/1350/Avatar-Dep-Nu%20(13).jpg',
    name: 'James Stewart',
    isFollow: false,
  },
  {
    id: '5',
    avatar:
      'https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-avatar-dep-cho-con-gai-dai-dien-Facebook-Zalo-Tiktok.jpg',
    name: 'Jacon Ginnish',
    isFollow: false,
  },
];

const SecondRoute = () => {
  return (
    <SafeAreaView>
      <View>
        {data.map(item => (
          <Component
            key={item.id}
            name={item.name}
            avatar={item.avatar}
            isFollow={item.isFollow}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const FirstRoute = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image
        style={styles.avatar}
        source={{uri: item.avatar}}
        resizeMode="cover"></Image>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
>>>>>>> 9677314992ccf5eae2f4f9f8e79353c4c6a5db5b

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#60B939'}}
    style={{backgroundColor: '#FFFFFF'}}
    renderLabel={({route}) => (
      <Text style={{fontSize: 14, color: 'black', margin: 8}}>
        {route.title}
      </Text>
    )}
  />
);

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '5 người theo dõi'},
    {key: 'second', title: 'Theo dõi 5 người'},
  ]);

  return (
<<<<<<< HEAD
      // nếu code đoạn đầu vào đây thì sẽ ko hiện TabView bên dưới
      <>
      <View style = {styles.viewHead}>
            <TouchableOpacity >
                <Back style = {styles.ArrowBack}/>
            </TouchableOpacity> 
            <Text style={styles.TranTrungGioi}>Trần Trung Giới</Text>
        </View>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
=======
    // nếu code đoạn đầu vào đây thì sẽ ko hiện TabView bên dưới
    // Cần bọc 1 Element ngoài cùng cho 1 component hay 1 View nào đó
    <>
      <View style={styles.viewHead}>
        <TouchableOpacity>
          <Back style={styles.ArrowBack} />
        </TouchableOpacity>
        <Text style={styles.TranTrungGioi}>Trần Trung Giới</Text>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
>>>>>>> 9677314992ccf5eae2f4f9f8e79353c4c6a5db5b
    </>
  );
}
