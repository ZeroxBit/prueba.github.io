import { UserTypeDocument } from "@/interfaces/user";
import { FormErrors, FormFields } from "@/pages/login/components/form";
import { validCE, validDNI, validPhone } from "@/utils/validFields";

export const validDocument = (document: string, typeDocument: UserTypeDocument["typeDocument"]) => {
  if (typeDocument === "dni") {
    return validDNI(document);
  } else {
    return validCE(document);
  }
};

export const validNumberPhone = (phone: string) => {
  const isValid = validPhone(phone);
  return isValid;
};

export const hasMessageError = (body: FormFields) => {
  const { document, typeDocument, phone, commercial, privacity } = body;

  let defaultErrorFields: FormErrors | null = null;

  if (!validDocument(document, typeDocument)) {
    defaultErrorFields = {
      document: {
        error: true,
        mesagge: "Ingrese un documento válido",
      },
    };
  }

  if (!validNumberPhone(phone)) {
    defaultErrorFields = {
      ...defaultErrorFields,
      phone: {
        error: true,
        mesagge: "Ingrese un número válido",
      },
    };
  }

  if (!commercial) {
    defaultErrorFields = {
      ...defaultErrorFields,
      commercial: {
        error: true,
        mesagge: "",
      },
    };
  }

  if (!privacity) {
    defaultErrorFields = {
      ...defaultErrorFields,
      privacity: {
        error: true,
        mesagge: "",
      },
    };
  }

  return defaultErrorFields;
};
