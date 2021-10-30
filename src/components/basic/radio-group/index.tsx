import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import { CheckboxType } from "common/types";
import { RadioGroupItem } from "./models";
import { Checkbox, Wrapper } from "../";
import getStyles from "./styles";

type Props = {
  type: CheckboxType;
  items: RadioGroupItem[];
  style?: StyleProp<ViewStyle>;
  onChange?: (activeItem: string) => void;
};

export const RadioGroup = ({ type, items, style, onChange }: Props) => {
  const [firstItem] = items;

  const [value, setValue] = React.useState(firstItem.name);

  const styles = getStyles(type);

  const handleToggle = (name: string) => () => {
    if (name === value) {
      return;
    }

    setValue(name);
  };

  React.useEffect(() => {
    onChange?.(value);
  }, [value]);

  const renderList = () => {
    return items.map((item, index) => (
      <Checkbox
        label={item.label}
        type={type}
        checked={item.name === value}
        key={item.name}
        style={index < items.length - 1 && styles.item}
        onChange={handleToggle(item.name)}
      />
    ));
  };

  switch (type) {
    case "primary":
      return <Wrapper style={style}>{renderList()}</Wrapper>;
    case "secondary":
      return <View style={style}>{renderList()}</View>;
  }
};
