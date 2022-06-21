import { useSelector } from "react-redux";
import "../styles/components/Cart.scss";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";
const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const cartSum = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum;
  };

  if (cart.length === 0) {
    return (
      <section className="cart">
        <h2 className="cart__header">
          <FaShoppingCart size={36} /> Koszyk
        </h2>
        <div className="cart__empty">
          <p>Koszyk jest pusty</p>
        </div>
      </section>
    );
  }
  return (
    <section className="cart">
      <h2 className="cart__header">
        <FaShoppingCart size={36} /> Koszyk
      </h2>
      <section className="cart__grid">
        <div className="cart__grid--header">Nazwa</div>
        <div className="cart__grid--header">Cena</div>
        <div className="cart__grid--header">Składniki</div>
        <div className="cart__grid--header">Ilość</div>
        {cart.map(({ _id, name, price, ingredients, quantity }) => (
          <React.Fragment key={_id}>
            <div className="cart__grid--item">{name}</div>
            <div className="cart__grid--item">{price} zł</div>

            <div className="cart__grid--item">
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="cart__grid--item">
              <div className="cart__control">
                <button className="cart__control--minus">-</button>
                <div className="cart__control--quantity">{quantity}</div>
                <button className="cart__control--plus">+</button>
              </div>
            </div>
          </React.Fragment>
        ))}
        <div className="makePizza__grid--summary">Do zapłaty:</div>
        <div className="makePizza__grid--summary">{cartSum()} zł</div>
        <div className="makePizza__grid--summary"></div>

        <div className="makePizza__grid--summary"></div>
      </section>
    </section>
  );
};

export default Cart;
