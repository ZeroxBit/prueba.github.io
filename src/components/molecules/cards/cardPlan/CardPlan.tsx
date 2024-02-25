import Image from "@/components/atoms/Image/Image";
import "./cardPlanStyle.scss";
import { FC } from "react";
import Buttom from "@/components/atoms/button/Buttom";
import CardPlanDescount from "./sections/CardPlanDescount";

type CardPlanProps = {
  image: string;
  title: string;
  price: number;
  listDescription: string[];
  onClick: () => void;
  showDescount?: boolean;
  descount: number;
};

const CardPlan: FC<CardPlanProps> = (props) => {
  const { title, listDescription, descount, image, price, showDescount, onClick } = props;

  return (
    <div className="card-plan">
      <div className="card-plan__header">
        <div className="card-plan__header__container">
          <p className="card-plan__header__title">{title}</p>
          <div>
            <Image className="card-plan__header__image" src={image} alt="Shield for me" width="48" height="48" />
          </div>
        </div>
        <CardPlanDescount descount={descount} showDescount={showDescount} price={price} />
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
          <Buttom className="button button--secondary button--small" onClick={onClick}>
            Seleccionar Plan
          </Buttom>
        </div>
      </div>
    </div>
  );
};

export default CardPlan;
