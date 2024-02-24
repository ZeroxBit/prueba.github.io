import Image from "@/components/atoms/Image/Image";
import Checkbox from "@/components/atoms/checkbox/Checkbox";
import { Input } from "@/components/atoms/input";
import LoginLayout from "@/components/layouts/loginLayout/LoginLayout";
import HeaderLogin from "@/components/molecules/headerLogin/HeaderLogin";
import InputsDocuments from "@/components/molecules/inputsDocument/InputsDocuments";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <LoginLayout>
      <HeaderLogin />
      <section className={`container ${styles.grid}`}>
        <aside className={styles["section-left"]}>
          <Image src="./src/assets/images/imagen_login.png" width="480" alt="Login" />
        </aside>
        <section className={styles["section-right"]}>
          <h1 className={styles["sub-title-gradient"]}>Seguro Salud Flexible</h1>
          <h2 className="title mt-1">Creado para ti y tu familia</h2>
          <p className="text mt-1">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>

          <form action="" className={`${styles.form} mt-2`}>
            <InputsDocuments error={false} textError="Error en el documento de identidad" />

            <Input id="phone" label="Celular" type="tel" error={false} textError="Error" classContainer="mt-1" />

            <Checkbox classContainer="mt-1" id="privacity" text="Acepto lo Política de Privacidad" />

            <Checkbox classContainer="mt-1" id="commercial" text="Acepto la Política Comunicaciones Comerciales" />

            <a href="#" className={`${styles.link} mt-1`} target="_blank">
              Aplican Términos y Condiciones.
            </a>

            <button type="submit" className={`${styles.button} ${styles["button--primary"]} mt-1`}>
              Cotiza aquí
            </button>
          </form>
        </section>
      </section>
    </LoginLayout>
  );
};

export default Login;
