import React from "react";
import "../styles/components/OurDishes.scss";
import OurDishesSidebar from "../components/OurDishesSidebar";
import DishesListItem from "../components/DishesListItem";

const dishesList = [
  {
    id: 1,
    name: "Margherirta",
    price: 25,
    ingredients: ["Sos pomidorowy", "Ser mozazarella"],
  },
];

const OurDishes = () => {
  return (
    <>
      <section className="dishes">
        <div className="dishes__container">
          <OurDishesSidebar />
          <section className="dishes__content">
            <h2 className="dishes__title">- Pizza -</h2>
            <div className="dishes__list">
              {dishesList.map((dish) => (
                <DishesListItem key={dish.id} dish={dish} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default OurDishes;
