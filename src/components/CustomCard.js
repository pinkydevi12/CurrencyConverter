import { StyleSheet, Text, View } from "react-native";

import { COLORS } from "../constants/Colors";
import { IMAGE_LINK } from "../constants/ImageLinks";
import { Image } from "react-native";
import React from "react";

const CustomCard = () => {
  return (
    <View
      style={{
        height: 100,
        backgroundColor: COLORS.CARD_COLOR,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Image
          source={IMAGE_LINK.Afganistan}
          style={{ height: 70, width: 70, borderRadius: 100 }}
        />
      </View>
      <View style={{ width: 200, paddingLeft: 10 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.TEXT_COLOR,
          }}
        >
          USD
        </Text>

        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: COLORS.TEXT_COLOR,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.LABEL_COLOR,
            }}
          ></Text>
          CAD
        </Text>
      </View>

      <View
        style={{
          width: 80,
          alignItems: "flex-end",
          paddingRight: 10,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: COLORS.LIGHT_YELLOW,
          }}
        >
          1.26
        </Text>
      </View>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({});
