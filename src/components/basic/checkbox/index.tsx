import * as React from "react";

import { CheckboxType } from "common/types";
import { BaseCheckboxProps, TypedCheckboxProps } from "./models";
import PrimaryCheckbox from "./components/primary";
import SecondaryCheckbox from "./components/secondary";

type Props = BaseCheckboxProps & {
  type?: CheckboxType;
  disabled?: boolean;
  onChange?: () => void;
};

export const Checkbox = ({
  type = "primary",
  label = "",
  checked = false,
  disabled = false,
  style,
  onChange,
}: Props) => {
  const handleToggle = React.useCallback(() => {
    if (disabled) {
      return;
    }

    onChange?.();
  }, [disabled, onChange]);

  const checkboxProps: TypedCheckboxProps = {
    style,
    label,
    checked,
    onToggle: handleToggle,
  };

  switch (type) {
    case "primary":
      return <PrimaryCheckbox {...checkboxProps} />;
    case "secondary":
      return <SecondaryCheckbox {...checkboxProps} />;
  }
};
