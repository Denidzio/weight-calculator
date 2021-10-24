import { StyleSheet, ViewStyle } from "react-native";

import { WRAPPER_COLOR } from "./config";

type Styles = {
  container: ViewStyle;
};

export default StyleSheet.create<Styles>({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: WRAPPER_COLOR,
  },
});
