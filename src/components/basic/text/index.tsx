import * as React from "react";
import { Text as NativeText, TextProps } from "react-native";

import styles from "./styles";

type Props = TextProps;

export const Text = ({ children, style, ...props }: Props) => {
  return (
    <NativeText {...props} style={[styles.text, style]}>
      {children}
    </NativeText>
  );
};
