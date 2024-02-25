import { FC, useState } from "react";
import "./inputStyle.scss";
import { InputProps } from "./InputInterface";

const Input: FC<InputProps> = (props) => {
  const {
    classContainer = "",
    classLabel = "",
    classInput = "",
    classError = "",
    type = "text",
    id,
    label,
    name,
    error = false,
    textError = "",
    inputOptions = {},
    onFocus,
    onBlur,
    onChange,
  } = props;
  const [value, setValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  const handleFocus = () => {
    setInputFocus(true);
    onFocus && onFocus();
  };

  const handleBlur = () => {
    setInputFocus(false);
    onBlur && onBlur();
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setValue(value);
    onChange && onChange(target);
  };

  const errorClass = error ? "input__container--error" : "";
  const classShowErrorText = error ? "" : "input__text-error--hidden";
  const labelActive = inputFocus || !!value ? "input__label--active" : "";

  return (
    <>
      <fieldset className={`input__container ${classContainer} ${errorClass}`}>
        <label htmlFor={id} className={`input__label ${labelActive} ${classLabel}`}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          className={`input__field ${classInput}`}
          value={value}
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...inputOptions}
        />
      </fieldset>
      <span className={`input__text-error ${classShowErrorText} ${classError}`}>{textError}</span>
    </>
  );
};

export default Input;
