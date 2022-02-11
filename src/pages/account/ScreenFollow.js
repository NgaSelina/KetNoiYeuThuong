import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Component from './componentFlatList';
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
                id={item.id} 
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
                id={item.id} 
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
    

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#60B939' }}
      style={{ backgroundColor: '#FFFFFF',}}
      renderLabel={({ route }) => (
        <Text style={{ fontSize: 14, color:'red', margin: 8 }}>
          {route.title}
        </Text>
      )}
    />
  );

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '5 người theo dõi' },
    { key: 'second', title: 'Theo dõi 5 người' },
  ]);

  return (
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
    </>
  );
}