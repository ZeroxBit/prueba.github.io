import Card from "@/components/molecules/cards/card/Card";
import HeaderSteps from "@/components/molecules/headerSteps/HeaderSteps";
import { plansIds } from "@/consts/plans";
import { Context } from "@/context/RootContex";
import { PlansModel } from "@/models/plans/plansModel";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListOfPlans from "./components/listOfPlans/ListOfPlans";
import "./plansStyle.scss";
import { scrollTop } from "@/utils/utils";

const Plans = () => {
  const { handleGetPlans, plans, typePlan, handleSetTypePlan, handleSetSelectPlan, logout } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    scrollTop();
    if (!plans.length) {
      handleGetPlans();
    }
  }, []);

  const handelBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    logout();
    navigate("/", { replace: true });
  };

  const handleActivePlan = (id: number) => {
    handleSetTypePlan(id);
  };

  const handleSelectPlan = (plan: PlansModel) => {
    handleSetSelectPlan(plan);
    handleGoResument();
  };

  const handleGoResument = () => {
    navigate("/resumen");
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
              active={typePlan === plansIds.forMe}
              id={plansIds.forMe}
              onSelect={handleActivePlan}
            />
            <Card
              image="src/assets/images/icon-shield-for-others.svg"
              title="Para alguien más"
              text="Realiza una cotización para uno de tus familiares o cualquier persona."
              active={typePlan === plansIds.forOthers}
              id={plansIds.forOthers}
              onSelect={handleActivePlan}
            />
          </div>
        </section>

        <section className="plans__grid__section-4">
          <ListOfPlans plans={plans} onSelect={handleSelectPlan} show={!!typePlan} showDescount={typePlan === plansIds.forOthers} />
        </section>
      </section>
    </main>
  );
};

export default Plans;
