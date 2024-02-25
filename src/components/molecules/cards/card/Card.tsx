import { FC } from "react";
import "./cardStyle.scss";
import Image from "@/components/atoms/Image/Image";

type CardProps = {
  active?: boolean;
  image: string;
  title: string;
  text: string;
  id?: number;
  onSelect?: (id: number) => void;
};

const Card: FC<CardProps> = ({ active, image, text, title, onSelect, id = 0 }) => {
  const icon = active ? "icon-circle-check" : "icon-circle-uncheck";

  const handleSelect = () => {
    onSelect && onSelect(id);
  };

  return (
    <div className={`card ${active ? "card--active" : ""}`} onClick={handleSelect}>
      <div className="card__header">
        <i className={icon}></i>
      </div>
      <div className="card__body">
        <div>
          <Image className="card__body__image" src={image} alt="Shield for me" width="40" height="48" />
        </div>
        <p className="card__body__title">{title}</p>
        <p className="card__body__text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
