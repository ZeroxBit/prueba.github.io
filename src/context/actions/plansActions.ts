import { getPlansServices } from "@/services/plansServices";

export const getPlansByAgeAction = async (age: number) => {
  try {
    const plans = await getPlansServices();
    return plans.list.filter((plan) => plan.age >= age);
  } catch (error: unknown) {
    throw new Error("Error al obtener los planes");
  }
};
