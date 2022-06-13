import React from "react";
import "../styles/components/OurDishes.scss";
import OurDishesSidebar from "../components/OurDishesSidebar";
import DishesListItem from "../components/DishesListItem";
import { getDishes } from "../features/dishes/dishesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const OurDishes = () => {
  const dispatch = useDispatch();
  const { dishes, type, isSuccess } = useSelector((state) => state.dishes);
  useEffect(() => {
    dispatch(getDishes());
  }, []);
  return (
    <>
      <section className="dishes">
        <div className="dishes__container">
          <OurDishesSidebar />
          <section className="dishes__content">
            <h2 className="dishes__title">- {type} -</h2>
            <div className="dishes__list">
              {isSuccess &&
                dishes
                  .filter((dish) => dish.type === type)
                  .map((dish) => <DishesListItem key={dish._id} dish={dish} />)}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default OurDishes;
