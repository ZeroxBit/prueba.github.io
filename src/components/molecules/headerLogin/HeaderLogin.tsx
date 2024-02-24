import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "@/assets/images/logo.svg";

const HeaderLogin = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.header} ${styles.nav}`}>
        <ul className={`${styles.nav__ul}`}>
          <li>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className={styles.nav__info}>
            <p className="description__small">¡Compra por este medio!</p>

            <div className="center-flex">
              <i className="icon__phone"></i>
              <a className={styles.nav__numberPhone} href="tel:014116001">
                (01) 411 6001
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderLogin;
