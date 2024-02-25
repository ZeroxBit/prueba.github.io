// create interface
// {
//   name: "Rocío",
//   lastName: "Miranda Díaz",
//   birthDay: "02-04-1990"

import { UserTypeDocument } from "@/interfaces/user";

export interface UserAPI {
  // EL usuario que se obtiene de la API
  name: string;
  lastName: string;
  birthDay: string;
}

// Complete User!!
export interface User extends UserAPI {
  age: number;
  typeDocument: UserTypeDocument["typeDocument"];
  document: string;
  phone: string;
}
