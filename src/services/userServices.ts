import { GET_USER_PATH } from "@/consts/endpoints";
import { UserAPI } from "@/models/user/userModel";

export const getUserServices = async (): Promise<UserAPI> => {
  const response = await fetch(GET_USER_PATH);
  return response.json();
};
