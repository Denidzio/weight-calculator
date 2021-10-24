import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { SECONDARY_CHECKBOX_COLOR } from "./config";

type Styles = {
  container: ViewStyle;
  content: ViewStyle;
  label: TextStyle;
  dash: ViewStyle;
};

export default (checked: boolean) =>
  StyleSheet.create<Styles>({
    container: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: checked ? SECONDARY_CHECKBOX_COLOR : "transparent",
      borderRadius: 6,
    },
    content: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    label: {
      fontSize: 16,
      marginRight: 25,
      paddingVertical: 5,
    },
    dash: {
      alignSelf: "center",
      position: "absolute",
      bottom: -1,
      opacity: checked ? 0 : 1,
    },
  });
