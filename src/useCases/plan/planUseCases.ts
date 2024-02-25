import { PlansList, PlansModel } from "@/models/plans/plansModel";

export const getFilteredPlans = (age: number, list: PlansList[]): PlansModel[] => {
  return list.filter((plan) => plan.age >= age).map((plan) => ({ ...plan, descount: plan.price * 0.05 })) as PlansModel[];
};
