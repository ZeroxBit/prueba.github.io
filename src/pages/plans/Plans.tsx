import HeaderSteps from "@/components/molecules/headerSteps/HeaderSteps";
import "./plansStyle.scss";
import { Link } from "react-router-dom";
import Card from "@/components/molecules/cards/card/Card";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/RootContex";

const plansIds = {
  forMe: 1,
  forOthers: 2,
};

const Plans = () => {
  const [activePlan, setactivePlan] = useState(0);
  const { handleGetPlans, plans } = useContext(Context);

  useEffect(() => {
    if (!plans.length) {
      handleGetPlans();
    }
  }, []);

  const handelBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  };

  const handleActivePlan = (id: number) => {
    setactivePlan(id);
  };

  return (
    <main className="plans">
      <HeaderSteps />
      <section className="container plans__grid ">
        <aside className="plans__grid__section-1">
          <Link to="/" className="link" onClick={handelBack}>
            <i className="icon-arrow-left"></i>
            Volver
          </Link>
        </aside>
        <section className="plans__grid__section-2">
          <h1 className="title">Rocío ¿Para quién deseas cotizar?</h1>
          <p className="description mt-1">Selecciona la opción que se ajuste más a tus necesidades.</p>
        </section>
        <section className="plans__grid__section-3">
          <div className="plans__grid__section-3__wrapper-cards ">
            <Card
              image="src/assets/images/icon-shield-for-me.svg"
              title="Para mi"
              text="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              active={activePlan === plansIds.forMe}
              id={plansIds.forMe}
              onSelect={handleActivePlan}
            />
            <Card
              image="src/assets/images/icon-shield-for-others.svg"
              title="Para alguien más"
              text="Realiza una cotización para uno de tus familiares o cualquier persona."
              active={activePlan === plansIds.forOthers}
              id={plansIds.forOthers}
              onSelect={handleActivePlan}
            />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Plans;
