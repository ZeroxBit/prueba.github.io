import Image from "@/components/atoms/Image/Image";
import LoginLayout from "@/components/layouts/loginLayout/LoginLayout";
import { FormFields, FormLogin } from "./components/form";
import "./loginStyle.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/RootContex";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { handleLogin, isLoading } = useContext(Context);
  const navigate = useNavigate();

  const [width, setWidth] = useState(0);
  console.log("width", width);
  useEffect(() => {
    const updateWidth = () => {
      const width = document.body.clientWidth;
      console.log(`updateWidth con ${width}`);
      setWidth(width);
    };

    // actualizaremos el width al montar el componente
    updateWidth();

    // nos suscribimos al evento resize de window
    window.addEventListener("resize", updateWidth);
  }, []);

  const handleSubmit = async (body: FormFields) => {
    await handleLogin(body).then(handleGoToPlans);
  };

  const handleGoToPlans = () => {
    navigate("/planes", { replace: true });
  };

  return (
    <LoginLayout>
      {width > 768 ? (
        <section className={`container login__grid`}>
          <aside className={"login__section-left"}>
            <Image src="./src/assets/images/imagen_login.png" width="540" alt="Login" className="image" />
          </aside>
          <section className={"login__section-right"}>
            <h1 className={"login__sub-title-gradient"}>Seguro Salud Flexible</h1>
            <h2 className="title mt-1">Creado para ti y tu familia</h2>
            <p className="login__text mt-1">Tú eliges cuánto Opagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>

            <FormLogin isLoading={isLoading} onSubmit={handleSubmit} />
          </section>
        </section>
      ) : (
        <section className="login__grid-mobile">
          <section className="login__grid-mobile__row">
            <section className={"login__grid-mobile__section-left"}>
              <h1 className={"login__sub-title-gradient"}>Seguro Salud Flexible</h1>
              <h2 className="title mt-1">Creado para ti y tu familia</h2>
            </section>
            <aside className={"login__grid-mobile__section-right"}>
              <Image src="./src/assets/images/imagen_login.png" width="540" alt="Login" className="image" />
            </aside>
          </section>
          <section className="login__grid-mobile__row2">
            <p className="login__text mt-1">Tú eliges cuánto Opagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>

            <FormLogin isLoading={isLoading} onSubmit={handleSubmit} />
          </section>
        </section>
      )}
    </LoginLayout>
  );
};

export default Login;
