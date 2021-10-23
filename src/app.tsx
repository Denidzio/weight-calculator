import * as React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

import { Text } from "components/basic";

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
