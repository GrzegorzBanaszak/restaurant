import { useState } from "react";
import "../styles/components/MakeDishesPizza.scss";
import { AiFillCheckCircle } from "react-icons/ai";
import { typeList } from "../utilis/makePizzaData";
import PizzaOwn from "./PizzaOwn";
import PizzaFoldable from "./PizzaFoldable";

const MakeDishesPizza = () => {
  const [type, setType] = useState(typeList[0]);

  return (
    <section className="makePizza">
      <h3 className="makePizza__title">Typ tworzenia</h3>
      <div className="makePizza__type">
        {typeList.map((item, index) => (
          <div
            key={index}
            onClick={() => setType(item)}
            className={`makePizza__type--btn ${
              item === type && "makePizza__type--active"
            }`}
          >
            {item === type && <AiFillCheckCircle color="white" fontSize={30} />}
            Pizza {item}
          </div>
        ))}
      </div>
      {type === typeList[0] ? <PizzaOwn /> : <PizzaFoldable />}
    </section>
  );
};

export default MakeDishesPizza;
