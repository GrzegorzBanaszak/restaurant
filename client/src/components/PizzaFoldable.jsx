import React from "react";
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
import { setMessageText } from "../features/message/messageSlice";

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
    if (pizzaFoldable.length === 8) {
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
    } else {
      dispatch(setMessageText("Pizza musi posiadać minimum 8 kawałków"));
    }
  };
  return (
    <>
      <h3 className="makeItem__title">Pizze do wyboru</h3>
      <section>
        {dishes
          .filter((dish) => dish.type === "pizza")
          .map(({ _id, name, price, ingredients }) => (
            <div
              key={_id}
              className={`makeItem__box ${
                pizzaFoldable.some((pizza) => pizza._id === _id)
                  ? "makeItem__box--active"
                  : ""
              }`}
            >
              <div className="makeItem__box--icon">
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

              <h4 className="makeItem__box--name">{name}</h4>
              <ul className="makeItem__box--ingredients">
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <div className="makeItem__box--price">
                Cena: {(price / 8).toFixed(2)} zł/szt
              </div>
              {pizzaFoldable.some((item) => item._id === _id) && (
                <div className="makeItem__control">
                  <button
                    className="makeItem__control--minus"
                    onClick={() =>
                      dispatch(decrementPizzaFoldableQuantity(_id))
                    }
                  >
                    -
                  </button>
                  <div className="makeItem__control--quantity">
                    {pizzaFoldable.find((item) => item._id === _id).quantity}
                  </div>
                  <button
                    className="makeItem__control--plus"
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
          <h3 className="makeItem__title">Podsumowanie</h3>
          <div className="makeItem__summary">
            <div className="makeItem__grid">
              <div className="makeItem__grid--header">Nazwa</div>
              <div className="makeItem__grid--header">Ilość</div>
              <div className="makeItem__grid--header">Cena</div>
              {pizzaFoldable.map(({ name, quantity, price }, index) => (
                <React.Fragment key={index}>
                  <div className="makeItem__grid--item">Pizza {name}</div>
                  <div className="makeItem__grid--item">
                    {price * quantity} zł
                  </div>
                  <div className="makeItem__grid--item">
                    {quantity} kawałków
                  </div>
                </React.Fragment>
              ))}
              <div className="makeItem__grid--summary">Suma do zapłaty:</div>
              <div className="makeItem__grid--summary">{pizzaSum()} zł</div>
              <div className="makeItem__grid--summary">
                <button
                  className="makeItem__grid--btn"
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
