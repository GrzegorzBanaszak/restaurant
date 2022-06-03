import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/HomeMake.scss";
import bgPhone from "../assets/phone.png";
const HomeMake = () => {
  return (
    <section className="make">
      <div className="make__title">
        <h2>Stwórz swoje wymarzone danie</h2>
      </div>
      <div className="make__container">
        <div className="make__content">
          <h4>
            Jest was tylko dwoje lecz każdy chciałby spróbować innego smaku
            pizzy?
          </h4>
          <p>
            Nasza restauracja umożliwia ci zamówienia pizzy w dwóch smakach i
            nie tylko Twóż własne burger, kanapki wrapsy i desery.
          </p>
          <Link className="navMobile__link" to="/make-dish">
            Sprawdz
          </Link>
        </div>
        <div className="make__preview">
          <div
            className="make__phone"
            style={{ backgroundImage: `url(${bgPhone})` }}
          >
            <div className="make__phone--content">hello</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMake;
