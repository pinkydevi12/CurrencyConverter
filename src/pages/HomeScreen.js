import { Card, Divider, List, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

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
      }}
    >
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 30,
                marginLeft: 30,
                color: COLORS.TEXT_COLOR,
              }}
            >
              Pinky
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 30,
                color: COLORS.TEXT_COLOR,
              }}
            >
              Hi, there, welcome back!
            </Text>
          </View>
          <View>
            <View
              style={{
                borderColor: COLORS.CARD_TEXT_COLOR,
                borderWidth: 2,
                width: 80,
                height: 80,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 30,
                borderRadius: 100,
              }}
            >
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
            }}
          >
            Popular Conversions
          </Text>
          <View
            style={{
              backgroundColor: COLORS.TEXT_COLOR,
              height: 600,
              marginTop: 20,
              marginHorizontal: 20,
              borderRadius: 20,
            }}
          >
            <ScrollView style={{ height: 600 }}>
              <Card style={styles.card}>
                <Card.Title title="Conversion Rates" />
                <Card.Content>
                  <List.Item
                    title="USD to EUR"
                    description="1 USD = 0.85 EUR"
                    left={(props) => (
                      <List.Icon {...props} icon="currency-usd" />
                    )}
                  />
                  <Divider />
                  <List.Item
                    title="USD to GBP"
                    description="1 USD = 0.75 GBP"
                    left={(props) => (
                      <List.Icon {...props} icon="currency-gbp" />
                    )}
                  />
                  <Divider />
                  <List.Item
                    title="USD to INR"
                    description="1 USD = 74.85 INR"
                    left={(props) => (
                      <List.Icon {...props} icon="currency-inr" />
                    )}
                  />
                  <Divider />
                  <List.Item
                    title="USD to JPY"
                    description="1 USD = 160.74 JPY"
                    left={(props) => (
                      <List.Icon {...props} icon="currency-jpy" />
                    )}
                  />
                  <Divider />
                  <List.Item
                    title="USD to EUR "
                    description="1 USD = 0.92263 EUR"
                    left={(props) => (
                      <List.Icon {...props} icon="currency-eur" />
                    )}
                  />
                  <Divider />
                  <List.Item
                    title="USD to EUR "
                    description="1 USD = 0.00034 ETH"
                    left={(props) => (
                      <List.Icon {...props} icon="currency-eth" />
                    )}
                  />
                </Card.Content>
              </Card>
            </ScrollView>
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
