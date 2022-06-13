import React from "react";
import "../styles/components/DishesListItem.scss";
const DishesListItem = ({ dish }) => {
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
      <div className="dishes-item__change">
        <button className="button-add--left">-</button>
        <input type="text" />
        <button className="button-add--right">+</button>
      </div>
      <div className="dishes-item__add">
        <button>Add</button>
      </div>
    </div>
  );
};

export default DishesListItem;
