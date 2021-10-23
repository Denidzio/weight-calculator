import { StyleSheet, TextStyle } from "react-native";

import { Color, Font } from "common/enums";

type Styles = {
  text: TextStyle;
};

export default StyleSheet.create<Styles>({
  text: {
    color: Color.TEXT_DEFAULT,
    fontFamily: Font.REGULAR,
  },
});
