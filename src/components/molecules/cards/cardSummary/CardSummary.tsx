import { useContext } from "react";
import "./cardSummary.scss";
import { Context } from "@/context/RootContex";
import { User } from "@/models/user/userModel";
import { plansIds } from "@/consts/plans";

const CardSummary = () => {
  const { user, selectedPlan, typePlan } = useContext(Context);

  const { name, document, phone, lastName, typeDocument } = user as User;

  const handleGetPrice = () => {
    if (!selectedPlan) return 0;

    if (typePlan === plansIds.forOthers) {
      return selectedPlan.price - selectedPlan?.descount;
    }
    return selectedPlan.price;
  };

  return (
    <div className="card-summary">
      <div className="card-summary__header">
        <h2 className="card-summary__header__title">Precios calculados para:</h2>
        <h3 className="card-summary__header__description">
          <i className="icon-family"></i> {name} {lastName}
        </h3>
      </div>
      <div className="card-summary__body">
        <div className="card-summary__body__col">
          <p className="card-summary__body__col__title">Responsable de pago</p>
          <p className="card-summary__body__col__description">
            {typeDocument?.toLocaleUpperCase()}: {document}
          </p>
          <p className="card-summary__body__col__description">Celular: {phone}</p>
        </div>
        <div className="card-summary__body__col">
          <p className="card-summary__body__col__title">Plan elegido</p>
          <p className="card-summary__body__col__description">Plan en Casa y Clínica</p>
          <p className="card-summary__body__col__description">Costo del Plan: ${handleGetPrice()} al mes</p>
        </div>
      </div>
    </div>
  );
};

export default CardSummary;
