import { StyleProp, ViewStyle } from "react-native";

export type BaseCheckboxProps = {
  label?: string;
  checked?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type TypedCheckboxProps = BaseCheckboxProps & {
  checked: boolean;
  onToggle?: () => void;
};
