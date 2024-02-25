import { getPlansServices } from "@/services/plansServices";
import { getFilteredPlans } from "@/useCases/plan/planUseCases";

export const getPlansByAgeAction = async (age: number) => {
  try {
    const plans = await getPlansServices();

    return getFilteredPlans(age, plans.list);
  } catch (error: unknown) {
    throw new Error("Error al obtener los planes");
  }
};
