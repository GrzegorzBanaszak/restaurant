import React from "react";
import "../styles/components/OurDishes.scss";
import OurDishesSidebar from "../components/OurDishesSidebar";
import DishesListItem from "../components/DishesListItem";
import { useSelector } from "react-redux";

const OurDishes = () => {
  const { dishes, type } = useSelector((state) => state.dishes);
  return (
    <>
      <section className="dishes">
        <div className="dishes__container">
          <OurDishesSidebar />
          <section className="dishes__content">
            <h2 className="dishes__title">- {type} -</h2>
            <div className="dishes__list">
              {dishes
                .filter((dish) => dish.type === type)
                .map((dish) => (
                  <DishesListItem key={dish._id} dish={dish} />
                ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default OurDishes;
