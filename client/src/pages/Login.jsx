import React from "react";
import "../styles/components/Login.scss";
import FormField from "../components/FormField";
const Login = () => {
  return (
    <>
      <section className="login">
        <div className="login__container">
          <h2 className="login__title">Logowanie</h2>
          <form className="login__form">
            <FormField inputName="Email" />
            <FormField inputName="Hasło" inputType="password" />
            <button type="submit">Zaloguj</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
