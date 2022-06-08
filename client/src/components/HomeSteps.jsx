import React from "react";
import "../styles/components/HomeSteps.scss";

const stepsList = [
  {
    id: 1,
    image: "order.png",
    descr: "Zadzwoń bądz zamów przez stronę",
  },
  {
    id: 2,
    image: "making.png",
    descr: "Z pasją przygotowujemy twoje danie",
  },
  {
    id: 3,
    image: "delivery.png",
    descr: "Nasi kurierzy dostarczają jedzienie jeszcze gorące",
  },
  {
    id: 4,
    image: "eating.png",
    descr: "Delektujesz się smakiem naszych potraw",
  },
];

const HomeSteps = () => {
  return (
    <section className="steps">
      <div className="steps__container">
        <h3 className="steps__title">4 PROSTE KROKI</h3>
        <div className="steps__content">
          {stepsList.map(({ id, image, descr }) => (
            <div key={id} className="steps__item">
              <img src={require("../assets/" + image)} alt="step" />
              <p>{descr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSteps;
