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
