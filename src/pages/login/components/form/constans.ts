import { FormOptions } from "@/interfaces/formLogin";
import { FormErrors } from "./formInterrfaces";

export const options: FormOptions[] = [
  { text: "DNI", value: "dni" },
  { text: "CE", value: "ce" },
];

export const defaultErrorFields: FormErrors = {
  phone: { error: false, mesagge: "" },
  document: { error: false, mesagge: "" },
  typeDocument: { error: false, mesagge: "" },
  privacity: { error: false, mesagge: "" },
  commercial: { error: false, mesagge: "" },
};
