import { Link } from "react-router-dom";
import "./header.scss";
import logo from "@/assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <li>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className="header__nav__info">
            <p className="header__nav__info__description">¡Compra por este medio!</p>

            <div className="center-flex">
              <i className="icon__phone"></i>
              <a className="header__nav__number-phone" href="tel:014116001">
                (01) 411 6001
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
