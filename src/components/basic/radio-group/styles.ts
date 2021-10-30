import { StyleSheet, ViewStyle } from "react-native";

import { CheckboxType } from "common/types";

type Styles = {
  item: ViewStyle;
};

export default (type: CheckboxType) =>
  StyleSheet.create<Styles>({
    item: {
      marginBottom: type === "primary" ? 8 : 12,
    },
  });
