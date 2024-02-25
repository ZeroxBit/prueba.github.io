import { FC, useEffect, useState } from "react";
import "./checkboxStyle.scss";
import { CheckboxProps } from "./checkboxInterface";

const Checkbox: FC<CheckboxProps> = (props) => {
  const { id, text, name, onChange, error, classContainer = "", checked = false } = props;
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (checked) {
      setCheck(checked);
    }
  }, []);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ischecked = !check;
    setCheck(ischecked);
    onChange && onChange(event);
  };

  const classError = error ? "checkbox__label-text--error" : "";

  return (
    <div className={`checkbox__container ${classContainer}`}>
      <div className="checkbox__group">
        <input type="checkbox" checked={check} id={id} name={name} onChange={handleOnChange} />
        <label htmlFor={id}></label>
      </div>
      <label htmlFor={id} className={`checkbox__label-text ${classError}`}>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
