import { Icon, MD3Colors } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants/Colors";
import CustomCard from "../components/CustomCard";
import React from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.PRIMARY_COLOR,
        height: "100%",
        marginTop: 40,
      }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
          }}>
          <View>
            <Text
              style={{
                fontSize: 30,
                marginLeft: 30,
                color: COLORS.TEXT_COLOR,
              }}>
              Pinky
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 30,
                color: COLORS.TEXT_COLOR,
              }}>
              Hi, there, welcome back!
            </Text>
          </View>
          <View>
            <View
              style={{
                borderColor: "#751299",
                borderWidth: 2,
                width: 80,
                height: 80,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 30,
                borderRadius: 100,
              }}>
              <AntDesign name="user" size={40} color="black" />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              fontSize: 30,
              color: COLORS.TEXT_COLOR,
              textAlign: "center",
              fontWeight: "bold",
            }}>
            Popular Conversions
          </Text>
          <View
            style={{
              backgroundColor: COLORS.TEXT_COLOR,
              height: 600,
              marginTop: 20,
              marginHorizontal: 20,
              borderRadius: 20,
            }}>
            <CustomCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
