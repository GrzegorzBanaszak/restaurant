import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/components/DishesListItem.scss";
import { addToCart, deleteDish } from "../features/cart/cartSlice";
import { BsTrash } from "react-icons/bs";
const DishesListItem = ({ dish }) => {
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const { _id, name, price, ingredients, type } = dish;

  const cartDish = cart.find((item) => item._id === _id);
  const dispatch = useDispatch();
  const handleChangeQuantityInCart = (actionType) => {
    dispatch(addToCart({ _id, name, price, actionType, type, ingredients }));
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
          {window.location.pathname === "/cart" && (
            <div className="dishes-item__add">
              <button onClick={() => dispatch(deleteDish(_id))}>
                <BsTrash size={15} /> Usuń
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DishesListItem;
