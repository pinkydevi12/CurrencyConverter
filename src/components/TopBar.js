import { Appbar } from "react-native-paper";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TopBar = ({ navigation }) => {
  navigation.navigate("ComponentNavigation");
};

return (
  <SafeAreaProvider>
    <Appbar.Header>
      <Appbar.Content title="Mario Smith" />
    </Appbar.Header>
  </SafeAreaProvider>
);

export default TopBar;
