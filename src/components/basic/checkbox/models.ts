import { ViewStyle } from "react-native";

export type CheckboxType = "primary" | "secondary";

export type BaseCheckboxProps = {
  label?: string;
  checked?: boolean;
  style?: ViewStyle;
};

export type TypedCheckboxProps = BaseCheckboxProps & {
  checked: boolean;
  onToggle?: () => void;
};
