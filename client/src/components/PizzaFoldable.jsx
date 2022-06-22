import React from "react";
import "../styles/components/MakeDishesPizza.scss";
import { v4 as uuidv4 } from "uuid";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  removePizzaFoldable,
  addPizzaFoldable,
  addPizzaFoldableQuantity,
  decrementPizzaFoldableQuantity,
  resetFoldable,
} from "../features/make/makeSlice";
import { addToCart } from "../features/cart/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
const PizzaFoldable = () => {
  const dispatch = useDispatch();
  const { dishes } = useSelector((state) => state.dishes);
  const { pizzaFoldable } = useSelector((state) => state.make);
  const pizzaSum = () => {
    let sum = 0;
    pizzaFoldable.forEach((pizza) => {
      sum += pizza.price * pizza.quantity;
    });
    return sum;
  };

  const handleAddPizzaFoldable = () => {
    if (!pizzaFoldable.length < 8) {
      dispatch(
        addToCart({
          _id: uuidv4(),
          actionType: "PLUS",
          type: "foldable",
          name: "Pizza składana",
          price: pizzaSum(),
          ingredients: pizzaFoldable,
        })
      );
      dispatch(resetFoldable());
    }
  };
  return (
    <>
      <h3 className="makePizza__title">Pizze do wyboru</h3>
      <section className="makePizza__pizzas">
        {dishes
          .filter((dish) => dish.type === "pizza")
          .map(({ _id, name, price, ingredients }) => (
            <div
              key={_id}
              className={`makePizza__pizza ${
                pizzaFoldable.some((pizza) => pizza._id === _id)
                  ? "makePizza__pizza--active"
                  : ""
              }`}
            >
              <div className="makePizza__pizza--icon">
                {pizzaFoldable.some((pizza) => pizza._id === _id) ? (
                  <AiFillMinusCircle
                    fontSize={30}
                    onClick={() => dispatch(removePizzaFoldable(_id))}
                  />
                ) : (
                  <AiFillPlusCircle
                    fontSize={30}
                    onClick={() =>
                      dispatch(
                        addPizzaFoldable({ _id, name, price, ingredients })
                      )
                    }
                  />
                )}
              </div>

              <h4 className="makePizza__pizza--name">{name}</h4>
              <ul className="makePizza__pizza--ingredients">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <div className="makePizza__pizza--price">
                Cena: {(price / 8).toFixed(2)} zł/szt
              </div>
              {pizzaFoldable.some((item) => item._id === _id) && (
                <div className="makePizza__control">
                  <button
                    className="makePizza__control--minus"
                    onClick={() =>
                      dispatch(decrementPizzaFoldableQuantity(_id))
                    }
                  >
                    -
                  </button>
                  <div className="makePizza__control--quantity">
                    {pizzaFoldable.find((item) => item._id === _id).quantity}
                  </div>
                  <button
                    className="makePizza__control--plus"
                    onClick={() => dispatch(addPizzaFoldableQuantity(_id))}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          ))}
      </section>
      {pizzaFoldable.length > 0 && (
        <>
          <h3 className="makePizza__title">Podsumowanie</h3>
          <div className="makePizza__summary">
            <div className="makePizza__grid">
              <div className="makePizza__grid--header">Nazwa</div>
              <div className="makePizza__grid--header">Ilość</div>
              <div className="makePizza__grid--header">Cena</div>
              {pizzaFoldable.map(({ name, quantity, price }, index) => (
                <React.Fragment key={index}>
                  <div className="makePizza__grid--item">Pizza {name}</div>
                  <div className="makePizza__grid--item">
                    {price * quantity} zł
                  </div>
                  <div className="makePizza__grid--item">
                    {quantity} kawałków
                  </div>
                </React.Fragment>
              ))}
              <div className="makePizza__grid--summary">Suma do zapłaty:</div>
              <div className="makePizza__grid--summary">{pizzaSum()} zł</div>
              <div className="makePizza__grid--summary">
                <button
                  className="makePizza__summary--btn"
                  onClick={handleAddPizzaFoldable}
                >
                  <FiShoppingCart /> Dodaj
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PizzaFoldable;
