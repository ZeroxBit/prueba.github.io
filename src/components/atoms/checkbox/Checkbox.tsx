import { FC, useEffect, useState } from "react";
import "./checkboxStyle.scss";
import { CheckboxProps } from "./checkboxInterface";

const Checkbox: FC<CheckboxProps> = (props) => {
  const { id, text, onChange, classContainer = "", checked = false } = props;
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (checked) {
      setCheck(checked);
    }
  }, []);

  const handleOnChange = () => {
    const ischecked = !check;
    setCheck(ischecked);
    onChange && onChange(ischecked);
  };

  return (
    <div className={`checkbox__container ${classContainer}`}>
      <div className="checkbox__group">
        <input type="checkbox" checked={check} id={id} onChange={handleOnChange} />
        <label htmlFor={id}></label>
      </div>
      <label htmlFor={id} className="checkbox__labelText">
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
