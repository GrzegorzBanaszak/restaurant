import React from "react";
import "../styles/components/OurDishes.scss";
import { useState } from "react";
import OurDishesSidebar from "../components/OurDishesSidebar";

const OurDishes = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      <section className="dishes">
        <div className="dishes__container">
          <OurDishesSidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          <section className="dishes__content">
            <h2 className="dishes__title">Pizza</h2>
          </section>
        </div>
      </section>
    </>
  );
};

export default OurDishes;
