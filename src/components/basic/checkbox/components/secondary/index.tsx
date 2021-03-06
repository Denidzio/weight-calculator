import * as React from "react";
import { TouchableOpacity, View } from "react-native";

import CheckedIcon from "assets/icons/secondary-checked.svg";
import { Text } from "components/basic";
import { SECONDARY_CHECKBOX_COLOR } from "./config";
import { TypedCheckboxProps } from "../../models";
import getStyles from "./styles";

export default ({ label, checked, style, onToggle }: TypedCheckboxProps) => {
  const styles = getStyles(checked);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style]}
      onPress={onToggle}
    >
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <CheckedIcon
          fill={SECONDARY_CHECKBOX_COLOR}
          opacity={checked ? 1 : 0.2}
        />
      </View>
    </TouchableOpacity>
  );
};
