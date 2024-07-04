import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Navigation from "./../navigation/stackNavigation/index";
import React from "react";

const CustomButton = ({ title, Navigation }) => {
  console.log("Navigation", Navigation);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Navigation.navigation.navigate("BottomTab");
        }}
        style={{
          width: 300,
          height: 50,
          backgroundColor: "yellow",
          justifyContent: "center",
          borderRadius: 20,
        }}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
