import React from "react";
import { useSelector } from "react-redux";
import "../styles/components/DishesListItem.scss";
const DishesListItem = ({ dish }) => {
  const { user } = useSelector((state) => state.auth);

  const { name, price, ingredients } = dish;
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
            <button className="button-add--left">-</button>
            <input type="text" readOnly />
            <button className="button-add--right">+</button>
          </div>
          <div className="dishes-item__add">
            <button>Dodaj</button>
          </div>
        </>
      )}
    </div>
  );
};

export default DishesListItem;
