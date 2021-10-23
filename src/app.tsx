import * as React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

export const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Hello, World!</Text>
      </View>
    </SafeAreaView>
  );
};
