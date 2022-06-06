import React from "react";
import "../styles/components/Login.scss";
import FormField from "./FormField";
import Nav from "./Nav";
const Login = () => {
  return (
    <>
    <Nav/>
      <section className="login">
          <div className="login__container">
              <h2 className="login__title">Login</h2>
              <form className="login__form">
                  <FormField inputName="Email"/>
                  <FormField inputName="Hasło" inputType="password"/>
                  <button type="submit">Zaloguj</button>
              </form>
          </div>
      </section>
    </>
  );
};

export default Login;
