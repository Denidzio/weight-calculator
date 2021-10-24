import * as React from "react";

import { BaseCheckboxProps, CheckboxType, TypedCheckboxProps } from "./models";
import PrimaryCheckbox from "./components/primary";
import SecondaryCheckbox from "./components/secondary";

type Props = BaseCheckboxProps & {
  type?: CheckboxType;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = ({
  type = "primary",
  label = "",
  checked = false,
  disabled = false,
  style,
  onChange,
}: Props) => {
  const [value, setValue] = React.useState(checked);

  const handleToggle = React.useCallback(() => {
    if (disabled) {
      return;
    }

    setValue(!value);
    onChange?.(!value);
  }, [disabled, value, onChange]);

  const checkboxProps: TypedCheckboxProps = {
    style,
    label,
    checked: value,
    onToggle: handleToggle,
  };

  React.useEffect(() => {
    setValue(checked);
  }, [checked]);

  switch (type) {
    case "primary":
      return <PrimaryCheckbox {...checkboxProps} />;
    case "secondary":
      return <SecondaryCheckbox {...checkboxProps} />;
  }
};
