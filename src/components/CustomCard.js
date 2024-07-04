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
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 20,
      }}>
      <View>
        <Image
          source={IMAGE_LINK.Afganistan}
          style={{ height: 70, width: 70, borderRadius: 100 }}
        />
      </View>
      <View>
        <Text>USD</Text>

        <Text>CAD</Text>
      </View>

      <View>
        <Text>1.26</Text>
      </View>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({});
