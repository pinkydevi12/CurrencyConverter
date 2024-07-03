import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./../../pages/HomeScreen";
import ProfileScreen from "../../pages/ProfileScreen";
import DetailsScreen from "../../pages/DetailsScreen";

const SideNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Detail" component={DetailsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default SideNavigation;

const styles = StyleSheet.create({});
