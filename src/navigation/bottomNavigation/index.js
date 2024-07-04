import AnDesign from "react-native-vector-icons/AntDesign";
import { COLORS } from "../../constants/Colors";
import DetailsScreen from "../../pages/DetailsScreen";
import HomeScreen from "./../../pages/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../../pages/ProfileScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState } from "react";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      activeColor="black"
      inactiveColor={COLORS.PRIMARY_COLORds}
      barStyle={{
        backgroundColor: COLORS.TAB_COLOR,
      }}>
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
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
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
