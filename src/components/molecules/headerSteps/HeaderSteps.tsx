import { useLocation } from "react-router-dom";
import "./headerStepsStyle.scss";

const HeaderSteps = () => {
  const { pathname } = useLocation();
  const disabled = pathname === "/resumen" ? "" : "disabled";

  return (
    <nav className="header-steps">
      <ul>
        <li>
          <span>1</span> Planes y coberturas
        </li>
        <li className="dashed"></li>
        <li className={`${disabled}`}>
          <span>2</span> Resumen
        </li>
      </ul>
    </nav>
  );
};

export default HeaderSteps;
