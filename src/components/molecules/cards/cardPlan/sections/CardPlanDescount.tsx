import { FC } from "react";
import "./cardPlandescount.scss";

type CardPlanDescountProps = {
  price: number;
  descount: number;
  showDescount?: boolean;
};
const CardPlanDescount: FC<CardPlanDescountProps> = ({ showDescount, descount, price }) => {
  const handleGetPrice = () => {
    if (showDescount) return price - descount;

    return price;
  };

  return (
    <div className="card-plan__descount mt-2">
      <p className="card-plan__descount__title">Costo del plan</p>
      {showDescount && <p className="card-plan__descount__descount">${price} antes</p>}

      <p className="card-plan__header__pricing__price">${handleGetPrice()} al mes</p>
    </div>
  );
};

export default CardPlanDescount;
