import React from "react";
import "../styles/components/OurDishes.scss";
import OurDishesSidebar from "../components/OurDishesSidebar";

const OurDishes = () => {
  return (
    <>
      <section className="dishes">
        <div className="dishes__container">
          <OurDishesSidebar />
          <section className="dishes__content">
            <h2 className="dishes__title">Pizza</h2>
          </section>
        </div>
      </section>
    </>
  );
};

export default OurDishes;
