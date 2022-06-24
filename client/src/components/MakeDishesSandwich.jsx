import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { breadType, sauceType } from "../utilis/makeSandwichData";
import { ingredientsList } from "../utilis/makePizzaData";
import {
  setSandwichBread,
  setSandwichIngredient,
  reset,
} from "../features/make/makeSlice";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { v4 as uuidv4 } from "uuid";
const MakeDishesSandwich = () => {
  const dispatch = useDispatch();
  const { sandwich } = useSelector((state) => state.make);

  const handleChangeIngredients = (value) => {
    dispatch(setSandwichIngredient(value));
  };

  const addSandwich = () => {
    if (sandwich.ingredients.length > 0) {
      dispatch(
        addToCart({
          _id: uuidv4(),
          actionType: "PLUS",
          type: "sandwich",
          name: "Kanapka z pieczywa" + sandwich.bread,
          price: sandwich.price,
          ingredients: sandwich.ingredients,
        })
      );
      dispatch(reset());
    }
  };
  return (
    <section className="makeItem">
      <h3 className="makeItem__title">Pieczywo</h3>
      <div className="makeItem__group">
        {breadType.map((item, index) => (
          <div
            className={`makeItem__select ${
              sandwich.bread === item.name ? "makeItem__select--active" : ""
            }`}
            onClick={() => dispatch(setSandwichBread(item))}
            key={index}
          >
            {item.name}
            <p>{item.price}zł</p>
          </div>
        ))}
      </div>
      <h3 className="makeItem__title">Sos do kanapki</h3>
      <ul className="makeItem__list">
        {sauceType.map((item, index) => (
          <li
            key={index}
            className={`${
              sandwich.ingredients.includes("Sos " + item) ? "selected" : ""
            }`}
            onClick={() =>
              handleChangeIngredients({ name: "Sos " + item, price: 2 })
            }
          >
            {item} <b>2zł</b>
          </li>
        ))}
      </ul>
      <h3 className="makeItem__title">Składniki</h3>
      <ul className="makeItem__list">
        {ingredientsList.map((item, index) => (
          <li
            key={index}
            onClick={() => handleChangeIngredients(item)}
            className={`${
              sandwich.ingredients.includes(item.name) ? "selected" : ""
            }`}
          >
            {item.name} <b>{item.price}zł</b>
          </li>
        ))}
      </ul>
      {sandwich.bread && (
        <>
          <h3 className="makeItem__title">Podsumowanie</h3>
          <div className="makeItem__summary--flex">
            <div className="makeItem__col makeItem__col--type">
              <h4>Typ pieczywa</h4>
              <p>{sandwich.bread}</p>
            </div>
            <div className="makeItem__col makeItem__col--ingredients">
              <h4>Składniki</h4>
              <ul>
                {sandwich.ingredients.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
            <div className="makeItem__col makeItem__col--price">
              <h4>Cena:{sandwich.price} zł</h4>
              <button onClick={addSandwich} className="makePizza__summary--btn">
                <FiShoppingCart /> Dodaj
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default MakeDishesSandwich;
