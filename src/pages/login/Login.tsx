import Image from "@/components/atoms/Image/Image";
import LoginLayout from "@/components/layouts/loginLayout/LoginLayout";
import { FormFields, FormLogin } from "./components/form";
import "./loginStyle.scss";
import { useContext } from "react";
import { Context } from "@/context/RootContex";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { handleLogin, isLoading } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (body: FormFields) => {
    await handleLogin(body).then(handleGoToPlans);
  };

  const handleGoToPlans = () => {
    navigate("/planes", { replace: true });
  };

  return (
    <LoginLayout>
      <section className={`container login__grid`}>
        <aside className={"login__section-left"}>
          <Image src="./src/assets/images/imagen_login.png" width="540" alt="Login" className="image" />
        </aside>
        <section className={"login__section-right"}>
          <h1 className={"login__sub-title-gradient"}>Seguro Salud Flexible</h1>
          <h2 className="title mt-1">Creado para ti y tu familia</h2>
          <p className="text mt-1">Tú eliges cuánto Opagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>

          <FormLogin isLoading={isLoading} onSubmit={handleSubmit} />
        </section>
      </section>
    </LoginLayout>
  );
};

export default Login;
