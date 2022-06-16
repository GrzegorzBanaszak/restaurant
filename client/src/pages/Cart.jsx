import { useSelector } from "react-redux";
import DishesListItem from "../components/DishesListItem";
import "../styles/components/Cart.scss";
const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  return (
    <section className="cart">
      <div className="cart__container">
        {cart.map((item) => (
          <DishesListItem key={item._id} dish={item} />
        ))}
      </div>
    </section>
  );
};

export default Cart;
