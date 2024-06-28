import AnDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState } from "react";
import HomeScreen from "./../../pages/HomeScreen";
import DetailsScreen from "../../pages/DetailsScreen";
import ProfileScreen from "../../pages/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  const [tabBackground, setTabBackground] = useState();
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="black"
        inactiveColor="#3e2465"
        barStyle={{
          backgroundColor: tabBackground,
        }}
      >
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          listeners={{
            tabPress() {
              setTabBackground("#d1aefc");
            },
          }}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <AnDesign name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={DetailsScreen}
          listeners={{
            tabPress() {
              setTabBackground("#f7a8e0");
            },
          }}
          options={{
            tabBarLabel: "Convert",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="currency-exchange" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          listeners={{
            tabPress() {
              setTabBackground("#9ce8ff");
            },
          }}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
