import { Select } from "@/components/atoms/select";
import "./inputDocumentStyle.scss";
import { Input } from "@/components/atoms/input";
import { FC } from "react";

type InputsDocumentsProps = {
  error?: boolean;
  textError?: string;
};

const InputsDocuments: FC<InputsDocumentsProps> = (props) => {
  const { textError, error } = props;

  const classShowErrorText = error ? "" : "select__text-error--hidden";

  return (
    <>
      <fieldset className="input-document">
        <Select
          options={[
            { text: "DNI", value: "dni" },
            { text: "CE", value: "ce" },
          ]}
          classContainer="input-document__select"
          error={error}
        />

        <Input id="phone" label="Nro. de documento" type="tel" error={error} classContainer="input-document__input" />
      </fieldset>
      <span className={`select__text-error ${classShowErrorText}`}>{textError}</span>
    </>
  );
};

export default InputsDocuments;
