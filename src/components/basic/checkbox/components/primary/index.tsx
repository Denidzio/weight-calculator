import * as React from "react";
import { TouchableOpacity, View } from "react-native";

import { Text } from "components/basic";
import { ACTIVE_OPACITY, hitSlop } from "./config";
import { TypedCheckboxProps } from "../../models";
import getStyles from "./styles";

export default ({ label, checked, style, onToggle }: TypedCheckboxProps) => {
  const styles = getStyles(checked);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onToggle}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY}
        hitSlop={hitSlop}
        onPress={onToggle}
      >
        <View style={styles.checkboxOuter}>
          <View style={styles.checkboxInner}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
