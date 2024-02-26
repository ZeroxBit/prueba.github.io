import HeaderSteps from "@/components/molecules/headerSteps/HeaderSteps";
import "./summary.scss";
import { Link } from "react-router-dom";
import CardSummary from "@/components/molecules/cards/cardSummary/CardSummary";

const Summary = () => {
  return (
    <main className="summary">
      <HeaderSteps />
      <section className="container summary__grid ">
        <aside className="summary__grid__section-1">
          <Link to="/plans" className="link">
            <i className="icon-arrow-left"></i>
            Volver
          </Link>
        </aside>
        <aside className="summary__grid__section-2">
          <h1 className="title">Resumen del seguro</h1>
        </aside>
        <section className="summary__grid__section-3">
          <CardSummary />
        </section>
      </section>
    </main>
  );
};

export default Summary;
