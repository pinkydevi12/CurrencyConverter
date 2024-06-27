import { ImageBackground, StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import React from "react";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../img/welcome.jpg");

const Welcome = () => {
  return (
    <ImageBackground
      source={WelcomeImage}
      style={[containerStyle.container, {}]}
    >
      <View
        style={{
          flex: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "black",
            backgroundColor: "yellow",
            paddingHorizontal: 10,
          }}
        >
          CURRENCY
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#fff",
            borderColor: "yellow",
            borderWidth: 2,
            padding: 12,
          }}
        >
          CONVERTER
        </Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <CustomButton title={"Get Started"}></CustomButton>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
