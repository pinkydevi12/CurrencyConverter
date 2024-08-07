import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";

import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/welcome.jpg");

const Welcome = (navigation) => {
  console.log("navigation", navigation);

  return (
    <>
      <ImageBackground
        source={WelcomeImage}
        style={[containerStyle.container, { width: "100", height: "100" }]}
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
              width: 233,
              textAlign: "center",
            }}
          >
            CONVERTER APP
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <CustomButton
            Navigation={navigation}
            title={"Get Started"}
          ></CustomButton>
        </View>
      </ImageBackground>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
