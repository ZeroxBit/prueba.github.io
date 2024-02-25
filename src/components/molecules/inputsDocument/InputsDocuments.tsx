import { Select } from "@/components/atoms/select";
import "./inputDocumentStyle.scss";
import { Input } from "@/components/atoms/input";
import { FC } from "react";
import { FormOptions } from "@/interfaces/formLogin";
import { InputProps } from "@/components/atoms/input/InputInterface";

type InputsDocumentsProps = {
  inputLabelText?: string;
  error?: boolean;
  textError?: string;
  inputName: string;
  onSelectChange?: (value: FormOptions["value"]) => void;
  onInputChange?: (target: EventTarget & HTMLInputElement) => void;
  defaultSelectValue?: string;
  listOptions: FormOptions[];
  inputOptions?: InputProps["inputOptions"];
};

const defaultInputLabelText = "Nro. de documento";

const InputsDocuments: FC<InputsDocumentsProps> = (props) => {
  const {
    inputName,
    textError,
    error,
    listOptions,
    onSelectChange,
    onInputChange,
    defaultSelectValue,
    inputOptions,
    inputLabelText = defaultInputLabelText,
  } = props;

  const handleSelectOnChange = (value: FormOptions["value"]) => {
    onSelectChange && onSelectChange(value);
  };

  const handleInputOnChange = (target: EventTarget & HTMLInputElement) => {
    onInputChange && onInputChange(target);
  };

  const classShowErrorText = error ? "" : "select__text-error--hidden";

  return (
    <>
      <fieldset className="input-document">
        <Select options={listOptions} classContainer="input-document__select" error={error} onChange={handleSelectOnChange} defaultValue={defaultSelectValue} />

        <Input
          id="phone"
          name={inputName}
          label={inputLabelText}
          type="tel"
          error={error}
          classContainer="input-document__input"
          onChange={handleInputOnChange}
          inputOptions={inputOptions}
        />
      </fieldset>
      <span className={`select__text-error ${classShowErrorText}`}>{textError}</span>
    </>
  );
};

export default InputsDocuments;
