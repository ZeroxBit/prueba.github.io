import React, { FC, useEffect, useState } from "react";
import "./selectStyle.scss";
import { FormOptions } from "@/interfaces/formLogin";

type SelectProps = {
  classContainer?: string;
  classSelect?: string;
  defaultValue?: string;
  options: FormOptions[];
  onChange?: (value: FormOptions["value"]) => void;
  error?: boolean;
};

const Select: FC<SelectProps> = (props) => {
  const { options, onChange, error, classContainer = "", classSelect = "", defaultValue = "" } = props;
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    if (defaultValue) {
      setSelectValue(defaultValue);
    }
  }, []);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = target;
    setSelectValue(value);
    onChange && onChange(value as FormOptions["value"]);
  };

  const errorClass = error ? "select__container--error" : "";

  return (
    <div className={`select__container ${classContainer} ${errorClass}`}>
      <select name="document" onChange={handleOnChange} className={`select__tag ${classSelect}`} value={selectValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <i className="icon-arrow-down"></i>
    </div>
  );
};

export default Select;
