import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import { Color, Font } from "common/enums";
import { INPUT_WRAPPER_COLOR, INPUT_ACTIVE_COLOR, INPUT_COLOR } from "./config";

type Styles = {
  container: ViewStyle;
  label: TextStyle;
  inputWrapper: TextStyle;
  input: ViewStyle;
  icon: ViewStyle;
};

export default (isFocused: boolean) =>
  StyleSheet.create<Styles>({
    container: {
      backgroundColor: INPUT_WRAPPER_COLOR,
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    label: {
      fontSize: 12,
      color: Color.TEXT_DEFAULT,
      opacity: isFocused ? 1 : 0,
    },
    inputWrapper: {
      flexDirection: "row",
    },
    input: {
      flex: 1,
      paddingVertical: 8,
      paddingRight: 15,
      borderBottomWidth: 1,
      borderBottomColor: isFocused ? INPUT_ACTIVE_COLOR : INPUT_COLOR,
      fontSize: 16,
      fontFamily: Font.REGULAR,
    },
    icon: {
      justifyContent: "center",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: isFocused ? INPUT_ACTIVE_COLOR : INPUT_COLOR,
    },
  });
