import { UserTypeDocument } from "@/interfaces/user";

export interface FormFields {
  phone: string;
  document: string;
  typeDocument: UserTypeDocument["typeDocument"];
  privacity: boolean;
  commercial: boolean;
}

export interface FormErrors {
  phone?: { error: boolean; mesagge: string };
  document?: { error: boolean; mesagge: string };
  typeDocument?: { error: boolean; mesagge: string };
  privacity?: { error: boolean; mesagge: string };
  commercial?: { error: boolean; mesagge: string };
}
