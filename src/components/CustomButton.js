import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import Navigation from "./../navigation/stackNavigation/index";

const CustomButton = ({ title, Navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          Navigation.navigate("SideNav");
        }}
        style={{
          width: 300,
          height: 50,
          backgroundColor: "yellow",
          justifyContent: "center",
          borderRadius: 20,
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
