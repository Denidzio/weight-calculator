import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import styles from "./styles";

type Props = {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
};

export const Wrapper = ({ children, style }: Props) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
