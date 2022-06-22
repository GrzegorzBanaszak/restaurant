import React from "react";
import "../styles/components/MakeDishesBox.scss";
import { ingredientsList } from "../utilis/makeBoxData";
const MakeDishesBox = () => {
  return (
    <section className="makeBox">
      <h3 className="makePizza__title">Składniki</h3>
      <div>
        {ingredientsList.map((ingredient, index) => (
          <div key={index} className="makeBox__item makeBox__item--active">
            <h4 className="makeBox__item--name">{ingredient.name}</h4>
            <p className="makeBox__item--description">
              {ingredient.description}
            </p>
            <div className="makeBox__item--price">
              {ingredient.price.toFixed(2)} zł/szt
            </div>
            <div className="makeBox__control">
              <button className="makeBox__control--minus">-</button>
              <div className="makeBox__control--quantity"></div>
              <button className="makeBox__control--plus">+</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MakeDishesBox;
