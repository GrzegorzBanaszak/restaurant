import React from "react";
import "../styles/components/MakeDishesPizza.scss";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import { cakeTypeList, ingredientsList } from "../utilis/makePizzaData";
import { setIngredient, setCakeType } from "../features/make/makeSlice";
const PizzaOwn = () => {
  const { pizza } = useSelector((state) => state.make);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setCakeType(value));
  };

  const handleChangeIngredients = (value) => {
    dispatch(setIngredient(value));
  };
  return (
    <>
      <h3 className="makePizza__title">Rodzaj ciasta</h3>
      <div className="makePizza__type">
        {cakeTypeList.map((type, index) => (
          <div
            key={index}
            onClick={() => handleChange(type)}
            className={`makePizza__type--btn ${
              pizza.cake === type && "makePizza__type--active"
            }`}
          >
            {pizza.cake === type && (
              <AiFillCheckCircle color="white" fontSize={30} />
            )}
            Ciasto {type}
          </div>
        ))}
      </div>
      <h3 className="makePizza__title">Składniki</h3>
      <ul className="makePizza__list">
        {ingredientsList.map((ingredient, index) => (
          <li
            onClick={() => handleChangeIngredients(ingredient)}
            className={`${
              pizza.ingredients.includes(ingredient) ? "selected" : ""
            }`}
            key={index}
          >
            {ingredient}
          </li>
        ))}
      </ul>
      <h3 className="makePizza__title">Podsumowanie</h3>
      <div className="makePizza__summary">
        <div className="makePizza__col cake">
          <h4>Typ ciasta</h4>
          <p>{pizza.cake}</p>
        </div>
        <div className="makePizza__col ingredients">
          <h4>Składniki</h4>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="makePizza__col price">
          <h4>Cena: </h4>
        </div>
      </div>
    </>
  );
};

export default PizzaOwn;
