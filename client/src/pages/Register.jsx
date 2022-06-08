import React from "react";
import FormField from "../components/FormField";
import "../styles/components/Register.scss";
const Register = () => {
  return (
    <>
      <section className="register">
        <div className="register__container">
          <h2 className="register__title">Rejestracja</h2>
          <form className="register__form">
            <FormField inputName="Email" />
            <FormField inputName="Hasło" inputType="password" />
            <FormField inputName="Powtórz hasło" inputType="password" />
            <button type="submit">Zarejstruj</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
