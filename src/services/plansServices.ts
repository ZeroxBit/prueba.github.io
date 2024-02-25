import { GET_PLANS_PATH } from "@/consts/endpoints";
import { Plans } from "@/models/plans/plansModel";

export const getPlansServices = async (): Promise<Plans> => {
  const response = await fetch(GET_PLANS_PATH);
  return response.json();
};
