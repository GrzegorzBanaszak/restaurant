import React from "react";
import "../styles/components/MakeDishesPizza.scss";
import { AiFillCheckCircle } from "react-icons/ai";
const PizzaFoldable = () => {
  return (
    <>
      <h3 className="makePizza__title">Pizze do wyboru</h3>
      <section className="makePizza__pizzas">
        <div className=" makePizza__pizza makePizza__pizza--active">
          <AiFillCheckCircle fontSize={30} />
          <h4 className="makePizza__pizza--name">Nazwa</h4>
          <ul className="makePizza__pizza--ingredients"></ul>
          <div className="makePizza__control">
            <button className="makePizza__control--minus">-</button>
            <div className="makePizza__control--quantity">1</div>
            <button className="makePizza__control--plus">+</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PizzaFoldable;
