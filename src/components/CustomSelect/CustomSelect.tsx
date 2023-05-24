import Select, { Props } from "react-select";
import { selectStyles } from "./style";

export interface ICustomSelectOption {
  label: string;
  value: string;
}

export const CustomSelect = (props: Props<ICustomSelectOption>) => {
  return (
    <Select
      {...props}
      components={{ Input: () => null, IndicatorSeparator: () => null }}
      styles={selectStyles}
    />
  );
};
