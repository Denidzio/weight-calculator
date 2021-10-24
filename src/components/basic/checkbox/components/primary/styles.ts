import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { PRIMARY_CHECKBOX_COLOR } from "./config";

type Styles = {
  container: ViewStyle;
  label: TextStyle;
  checkboxOuter: ViewStyle;
  checkboxInner: ViewStyle;
};

export default (checked: boolean) =>
  StyleSheet.create<Styles>({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    label: {
      fontSize: 16,
      marginRight: 15,
    },
    checkboxOuter: {
      height: 24,
      width: 24,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 2,
      borderColor: PRIMARY_CHECKBOX_COLOR,
      borderRadius: 12,
      opacity: checked ? 1 : 0.6,
    },
    checkboxInner: {
      height: 10,
      width: 10,
      backgroundColor: PRIMARY_CHECKBOX_COLOR,
      borderRadius: 5,
      opacity: checked ? 1 : 0,
    },
  });
