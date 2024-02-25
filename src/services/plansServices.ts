import { GET_PLANS_PATH } from "@/consts/endpoints";

export const getPlansServices = async () => {
  const response = await fetch(GET_PLANS_PATH);
  return response.json();
};
