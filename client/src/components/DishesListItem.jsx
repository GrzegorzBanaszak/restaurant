import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/components/DishesListItem.scss";
import { addToCart } from "../features/cart/cartSlice";
const DishesListItem = ({ dish }) => {
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const { _id, name, price, ingredients } = dish;
  const cartDish = cart.find((item) => item.id === _id);
  const dispatch = useDispatch();
  const handleChangeQuantityInCart = (type) => {
    dispatch(addToCart({ id: _id, name, price, type }));
  };
  return (
    <div className="dishes-item">
      <h4 className="dishes-item__name">{name}</h4>
      <ul className="dishes-item__ingredients">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div className="dishes-item__price">Cena: {price} zł</div>
      {user && (
        <>
          <div className="dishes-item__change">
            <button
              className="button-add--left"
              onClick={() => handleChangeQuantityInCart("MINUS")}
            >
              -
            </button>
            <input
              type="text"
              readOnly
              value={cartDish ? cartDish.quantity : 0}
            />
            <button
              className="button-add--right"
              onClick={() => handleChangeQuantityInCart("PLUS")}
            >
              +
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DishesListItem;
