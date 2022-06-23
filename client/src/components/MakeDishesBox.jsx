import React from "react";
import "../styles/components/MakeDishesBox.scss";
import MakeDishesBoxDrinks from "./MakeDishesBoxDrinks";
import MakeDishesBoxIngredients from "./MakeDishesBoxIngredients";

const MakeDishesBox = () => {
  return (
    <section className="makeBox">
      <MakeDishesBoxIngredients />
      <MakeDishesBoxDrinks />
    </section>
  );
};

export default MakeDishesBox;
