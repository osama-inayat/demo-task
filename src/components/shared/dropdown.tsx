import React from "react";
import { DropDownProps } from "../../interfaces/components/shared/props";
const Dropdown = ({
  id,
  options,
  valueProp,
  optionLabelProp,
  onChange,
  label,
  value,
}: DropDownProps): JSX.Element => {
  return (
    <>
      <label htmlFor={id} className="label label-default float-left">
        {label}
      </label>
      <select
        className="form-control"
        id={id}
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
      >
        <option value="">Choose Option</option>
        {options.map((option, index) => (
          <option key={index} value={option[valueProp]}>
            {option[optionLabelProp]}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
