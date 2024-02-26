import CardPlan from "@/components/molecules/cards/cardPlan/CardPlan";
import { PlansModel } from "@/models/plans/plansModel";
import { FC } from "react";

type ListOfPlansProps = {
  show?: boolean;
  onSelect: (plan: PlansModel) => void;
  plans: PlansModel[];
  showDescount?: boolean;
};

const imagePlanHouse = "/images/icon-plan-house.svg";
const imagePlanHousePlusHospital = "/images/icon-plan-house-hospital.svg";
const titlePlanHousePlusHospital = "Plan en Casa y Clínica";

const ListOfPlans: FC<ListOfPlansProps> = ({ show, plans, onSelect, showDescount }) => {
  if (!show) return <></>;

  const handleSelect = (plan: PlansModel) => {
    onSelect(plan);
  };

  return plans.map((plan, index) => (
    <CardPlan
      key={index}
      image={titlePlanHousePlusHospital === plan.name ? imagePlanHousePlusHospital : imagePlanHouse}
      title={plan.name}
      price={plan.price}
      listDescription={plan.description}
      descount={plan.descount}
      onClick={() => handleSelect(plan)}
      showDescount={showDescount}
    />
  ));
};

export default ListOfPlans;
