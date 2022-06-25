import { useSelector } from "react-redux";
import "../styles/components/Cart.scss";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import CartItem from "../components/CartItem";
const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  const cartSum = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum.toFixed(2);
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
      <section className="cart__container">
        {cart.map((item) => (
          <CartItem key={item._id} dish={item} />
        ))}
        <div className="cart__summary">
          <div className="cart__summary--type">
            <label>
              <input type="checkbox" />
              Płatność kartą
            </label>
            <label>
              <input type="checkbox" />
              Płatność przy odbiorze
            </label>
          </div>
          <div className="cart__summary--total">
            <h3>Łącznie do zapłaty: {cartSum()} zł</h3>
          </div>
          <button className="cart__summary--submit">Zamawiam</button>
        </div>
      </section>
    </section>
  );
};

export default Cart;
