import FormField from "../components/FormField";
import "../styles/components/Register.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const defaultFormData = {
  email: "",
  password: "",
  passwordConfirm: "",
};

const Register = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setError(message);
      dispatch(reset());
    }

    if (isSuccess || user) {
      dispatch(reset());
      nav("/");
    }
  }, [isError, isSuccess, message, setError, user, nav, dispatch]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      setError("Hasła nie są takie same");
    } else {
      dispatch(
        register({ email: formData.email, password: formData.password })
      );
    }
  };
  if (isLoading) {
    return <Spinner color="white" />;
  }

  return (
    <>
      <section className="register">
        <div className="register__container">
          <h2 className="register__title">Rejestracja</h2>
          <form className="register__form" onSubmit={handelFormSubmit}>
            <FormField
              inputName="Email"
              formType="email"
              value={formData.email}
              changeHandler={handleChange}
            />
            <FormField
              inputName="Hasło"
              formType="password"
              inputType="password"
              changeHandler={handleChange}
              value={formData.password}
            />
            <FormField
              inputName="Powtórz hasło"
              formType="passwordConfirm"
              inputType="password"
              changeHandler={handleChange}
              value={formData.passwordConfirm}
            />
            {error && <p className="register__error">{error}</p>}
            <button type="submit">Zarejstruj</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
