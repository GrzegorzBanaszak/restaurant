import React from "react";
import "../styles/components/MakeDishesPizza.scss";
import { useSelector, useDispatch } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";
import { cakeTypeList, ingredientsList } from "../utilis/makePizzaData";
import { setIngredient, setCakeType, reset } from "../features/make/makeSlice";
import { addToCart } from "../features/cart/cartSlice";
import { v4 as uuidv4 } from "uuid";
import { FiShoppingCart } from "react-icons/fi";
const PizzaOwn = () => {
  const { pizza } = useSelector((state) => state.make);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(setCakeType(value));
  };

  const handleChangeIngredients = (value) => {
    dispatch(setIngredient(value));
  };

  const addPizza = () => {
    dispatch(
      addToCart({
        _id: uuidv4(),
        actionType: "PLUS",
        type: "pizza",
        name: "Pizza ciasto " + pizza.cake,
        price: pizza.price,
        ingredients: pizza.ingredients,
      })
    );
    dispatch(reset());
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
              pizza.cake === type.name && "makePizza__type--active"
            }`}
          >
            {pizza.cake === type.name && (
              <AiFillCheckCircle color="white" fontSize={30} />
            )}
            Ciasto {type.name} <b>{type.price}zł</b>
          </div>
        ))}
      </div>
      <h3 className="makePizza__title">Składniki</h3>
      <ul className="makePizza__list">
        {ingredientsList.map((ingredient, index) => (
          <li
            onClick={() => handleChangeIngredients(ingredient)}
            className={`${
              pizza.ingredients.includes(ingredient.name) ? "selected" : ""
            }`}
            key={index}
          >
            {ingredient.name} <b>{ingredient.price}zł</b>
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
          <h4>Cena: {pizza.price} zł</h4>
          <button onClick={addPizza} className="makePizza__summary--btn">
            <FiShoppingCart /> Dodaj
          </button>
        </div>
      </div>
    </>
  );
};

export default PizzaOwn;
