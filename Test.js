import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

// Home Screen
const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenName}>Kindacode.com</Text>
    </View>
  );
};

// Product Screen
const ProductScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenName}>Product Screen</Text>
    </View>
  );
};

// Contact Screen
const ContactScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenName}>Contact Screen</Text>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={30} color="blue" />
            ),
          }}
        />
        <Tab.Screen
          name="Product"
          component={ProductScreen}
          options={{
            // hide the bottom tab bar on Product Screen
            tabBarStyle: { display: "none" },
            tabBarIcon: () => <MaterialCommunityIcons name="cart" size={30} />,
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            // hide the bottom tab bar on Contact Screen
            tabBarStyle: { display: "none" },
            tabBarIcon: () => <MaterialCommunityIcons name="email" size={30} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Just some styles
// https://www.kindacode.com/cat/mobile/react-native/
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenName: {
    fontSize: 40,
  },
});

export default App;