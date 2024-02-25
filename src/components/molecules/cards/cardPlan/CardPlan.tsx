import Image from "@/components/atoms/Image/Image";
import "./cardPlanStyle.scss";
import { FC } from "react";
import Buttom from "@/components/atoms/button/Buttom";

type CardPlanProps = {
  image: string;
  title: string;
  price: string;
  listDescription: string[];
};

const CardPlan: FC<CardPlanProps> = (props) => {
  const { title, listDescription, image, price } = props;

  return (
    <div className="card-plan">
      <div className="card-plan__header">
        <div className="card-plan__header__container">
          <p className="card-plan__header__title">{title}</p>
          <div>
            <Image className="card-plan__header__image" src={image} alt="Shield for me" width="48" height="48" />
          </div>
        </div>
        <div className="card-plan__header__pricing mt-2">
          <p className="card-plan__header__pricing__title">Costo del plan</p>
          <p className="card-plan__header__pricing__descount">10% antes</p>
          <p className="card-plan__header__pricing__price">${price} al mes</p>
        </div>
      </div>
      <div className="card-plan__content">
        <div className="card-plan__body">
          <ul className="card-plan__body__list">
            {listDescription.map((item, index) => (
              <li key={index} className="card-plan__body__list__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="card-plan__footer">
          <Buttom className="button button--secondary button--small">Seleccionar Plan</Buttom>
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
