import React from "react";
import MakeDishesBoxAdditionally from "./MakeDishesBoxAdditionally";
import MakeDishesBoxDrinks from "./MakeDishesBoxDrinks";
import MakeDishesBoxIngredients from "./MakeDishesBoxIngredients";
import MakeDishesBoxSummary from "./MakeDishesBoxSummary";

const MakeDishesBox = () => {
  return (
    <section className="makeBox">
      <MakeDishesBoxIngredients />
      <MakeDishesBoxDrinks />
      <MakeDishesBoxAdditionally />
      <MakeDishesBoxSummary />
    </section>
  );
};

export default MakeDishesBox;
