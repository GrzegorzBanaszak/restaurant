import { useSelector } from "react-redux";
import DishesListItem from "../components/DishesListItem";
import "../styles/components/Cart.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useSelector((state) => state.cart);
  useEffect(() => {
    const totalValue = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotal(totalValue);
  }, [cart]);

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
      <section className="cart__items">
        <div className="cart__container">
          {cart.map((item) => (
            <DishesListItem key={item._id} dish={item} />
          ))}
        </div>
      </section>
      <section className="cart__summary">
        <div className="cart__summary--total">
          Kwota do zapłaty:<p>{total}zł</p>
        </div>
        <button className="cart__summary--btn">Zamów</button>
      </section>
    </section>
  );
};

export default Cart;
