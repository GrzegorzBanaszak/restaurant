import React from "react";
import { increaseQuantity, decreaseQuantity } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ dish }) => {
  const { _id, name, price, type, ingredients, quantity } = dish;
  const dispatch = useDispatch();

  return (
    <div className="cart__element">
      <div className="cart__element--name">{name}</div>

      <div className="cart__element--ingredient">
        {type === "foldable" ? (
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient._id}>
                Pizza {ingredient.name} * {ingredient.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart__element--control">
        <div className="cart__control">
          <button
            className="cart__control--minus"
            onClick={() => dispatch(decreaseQuantity(_id))}
          >
            -
          </button>
          <div className="cart__control--quantity">{quantity}</div>
          <button
            className="cart__control--plus"
            onClick={() => dispatch(increaseQuantity(_id))}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart__element--price">
        Cena: {(price * quantity).toFixed(2)} zł
      </div>
    </div>
  );
};

export default CartItem;
