import { User, UserAPI } from "@/models/user/userModel";
import { FormFields } from "@/pages/login/components/form";
import { getAgeByBirthDay } from "@/utils/utils";

export const getUserAdapter = (user: UserAPI, fields: FormFields): User => {
  const age = getAgeByBirthDay(user.birthDay);

  return { ...user, ...fields, age };
};
