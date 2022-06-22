import React from "react";

const CartItem = ({ dish }) => {
  const { name, price, type, ingredients, quantity } = dish;
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
          <button className="cart__control--minus">-</button>
          <div className="cart__control--quantity">{quantity}</div>
          <button className="cart__control--plus">+</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
