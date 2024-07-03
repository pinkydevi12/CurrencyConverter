import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

import { Icon, MD3Colors } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../constants/Colors";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.PRIMARY_COLOR,
        height: "100%",
      }}
    >
      <ScrollView>
        <Text
          style={{
            fontSize: 30,
            width: 300,
            marginLeft: 20,
            marginTop: 20,
            flexDirection: "row",
            display: "flex",

            alignItems: "center",
          }}
        >
          Mario Smith
        </Text>
        <View>
          <Text
            style={{
              color: "black",
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            Hi there,welcome back
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 19,
              fontWeight: "700",
              marginLeft: 300,
              flexDirection: "row",
            }}
          >
            <Icon source="bell" color={MD3Colors.error20} size={30} />
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
