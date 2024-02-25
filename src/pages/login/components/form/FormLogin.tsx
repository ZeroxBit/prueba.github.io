import Buttom from "@/components/atoms/button/Buttom";
import Checkbox from "@/components/atoms/checkbox/Checkbox";
import { Input } from "@/components/atoms/input";
import InputsDocuments from "@/components/molecules/inputsDocument/InputsDocuments";
import { UserTypeDocument } from "@/interfaces/user";
import { hasMessageError } from "@/useCases/login/formValidations";
import { FC, useState } from "react";
import { options } from "./constans";
import { FormErrors, FormFields } from "./formInterrfaces";
import "./formLoginStyles.scss";

const maxLengthPhone = 9;
const maxLengthDocument: Record<UserTypeDocument["typeDocument"], number> = {
  dni: 8,
  ce: 12,
};

type FormLoginProps = {
  onSubmit: (fields: FormFields) => void;
  isLoading?: boolean;
};

const FormLogin: FC<FormLoginProps> = ({ onSubmit, isLoading }) => {
  const [phone, setPhone] = useState("");
  const [document, setDocument] = useState("");
  const [typeDocument, setTypeDocument] = useState(options[0].value);
  const [privacity, setPrivacity] = useState(false);
  const [commercial, setCommercial] = useState(false);
  const [errorFields, setErrorFields] = useState<FormErrors | null>(null);

  const handleInputChange = (target: EventTarget & HTMLInputElement) => {
    const { value, name } = target;
    if (name === "phone") {
      setPhone(value);
    } else {
      setDocument(value);
    }
  };

  const handleCheckboxChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = target;
    if (name === "privacity") {
      setPrivacity(checked);
    } else {
      setCommercial(checked);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body: FormFields = {
      phone,
      document,
      typeDocument,
      privacity,
      commercial,
    };

    const objectMessageError = hasMessageError(body);

    setErrorFields(() => objectMessageError);
    if (objectMessageError && Object.entries(objectMessageError).some(([, value]) => value)) return;

    onSubmit(body);
  };

  return (
    <form onSubmit={handleSubmit} className="form-login mt-2">
      {/* // Manejar el error del request con un alert!! */}
      <InputsDocuments
        defaultSelectValue={document}
        onInputChange={handleInputChange}
        inputName="document"
        onSelectChange={setTypeDocument}
        listOptions={options}
        error={errorFields?.document?.error || errorFields?.typeDocument?.error}
        textError={errorFields?.document?.mesagge || errorFields?.typeDocument?.mesagge}
        inputOptions={{ maxLength: maxLengthDocument[typeDocument] }}
      />

      <Input
        id="phone"
        name="phone"
        label="Celular"
        type="tel"
        onChange={handleInputChange}
        error={errorFields?.phone?.error}
        textError={errorFields?.phone?.mesagge}
        classContainer="mt-1"
        inputOptions={{ maxLength: maxLengthPhone }}
      />

      <Checkbox
        name="privacity"
        classContainer="mt-1"
        id="privacity"
        text="Acepto lo Política de Privacidad"
        onChange={handleCheckboxChange}
        error={errorFields?.privacity?.error}
      />

      <Checkbox
        name="commercial"
        classContainer="mt-1"
        id="commercial"
        text="Acepto la Política Comunicaciones Comerciales"
        onChange={handleCheckboxChange}
        error={errorFields?.commercial?.error}
      />

      <a href="https://www.rimac.com/politica-privacidad" className="form-login__link mt-1" target="_blank">
        Aplican Términos y Condiciones.
      </a>

      <Buttom type="submit" isLoading={isLoading} className="form-login__button form-login__button--primary mt-1">
        Cotiza aquí
      </Buttom>
    </form>
  );
};

export default FormLogin;
