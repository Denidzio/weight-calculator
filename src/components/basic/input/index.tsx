import * as React from "react";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { SvgProps } from "react-native-svg";

import { Text } from "components/basic";
import { INPUT_ACTIVE_COLOR, INPUT_COLOR } from "./config";
import getStyles from "./styles";

type Props = TextInputProps & {
  label: string;
  icon: React.FC<SvgProps>;
  style?: StyleProp<ViewStyle>;
};

export const Input = ({
  label,
  icon,
  style,
  onChangeText,
  onFocus,
  onBlur,
  ...props
}: Props) => {
  const [inputted, setInputted] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const value = isFocused ? inputted : inputted || label;

  const iconColor = isFocused ? INPUT_ACTIVE_COLOR : INPUT_COLOR;

  const styles = getStyles(isFocused);

  const handleFocus = React.useCallback((e) => {
    setIsFocused(true);
    onFocus?.(e);
  }, []);

  const handleBlur = React.useCallback((e) => {
    setIsFocused(false);
    onBlur?.(e);
  }, []);

  const handleChange = React.useCallback((text: string) => {
    setInputted(text);
    onChangeText?.(text);
  }, []);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          value={value}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChange}
          {...props}
        />
        <View style={styles.icon}>
          {React.createElement(icon, { fill: iconColor })}
        </View>
      </View>
    </View>
  );
};
