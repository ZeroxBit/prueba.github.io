import { GET_PLANS_PATH } from "@/consts/endpoints";
import { PlansAPI } from "@/models/plans/plansModel";

export const getPlansServices = async (): Promise<PlansAPI> => {
  const response = await fetch(GET_PLANS_PATH);
  return response.json();
};
