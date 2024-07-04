import React, { useState } from "react";

import { Drawer } from "react-native-paper";

const SideNavigation = ({ navigation }) => {
  const [active, setActive] = useState("");

  return (
    <Drawer.Section title="Some title">
      <Drawer.Item
        label="Home"
        active={active === "first"}
        onPress={() => {
          setActive("first");
          navigation.navigation.navigate("Home");
        }}
      />
      <Drawer.Item
        label="Details"
        active={active === "second"}
        onPress={() => {
          navigation.navigation.navigate("Details");
        }}
      />
      <Drawer.Item
        label="Profile"
        active={active === "second"}
        onPress={() => {
          navigation.navigation.navigate("Details");
        }}
      />
    </Drawer.Section>
  );
};

export default SideNavigation;
