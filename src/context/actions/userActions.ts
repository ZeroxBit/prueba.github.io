import { getUserAdapter } from "@/adapters/userAdapter/userAdapter";
import { USER_KEY } from "@/consts/storageKeys";
import { User } from "@/models/user/userModel";
import { FormFields } from "@/pages/login/components/form";
import { setStorageServices } from "@/services/storageServices";
import { getUserServices } from "@/services/userServices";

export const getUserAction = async (fields: FormFields): Promise<User> => {
  try {
    const userAPI = await getUserServices();
    const user = getUserAdapter(userAPI, fields);

    setStorageServices(USER_KEY, user);

    return user;
  } catch (error: unknown) {
    throw new Error("Error al obtener el usuario");
  }
};
