import React from "react";
import { increaseQuantity, decreaseQuantity } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ dish }) => {
  const { _id, name, price, type, ingredients, quantity } = dish;
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart__grid--item">{name}</div>
      <div className="cart__grid--item">{price} zł</div>

      <div className="cart__grid--item">
        {type === "pizza" ? (
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        ) : (
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient._id}>
                Pizza {ingredient.name} * {ingredient.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart__grid--item">
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
    </>
  );
};

export default CartItem;
