import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { typeList } from "../utilis/makePizzaData";
import PizzaOwn from "./PizzaOwn";
import PizzaFoldable from "./PizzaFoldable";

const MakeDishesPizza = () => {
  const [type, setType] = useState(typeList[0]);

  return (
    <section className="makeItem">
      <h3 className="makeItem__title">Typ tworzenia</h3>
      <div className="makeItem__group">
        {typeList.map((item, index) => (
          <div
            key={index}
            onClick={() => setType(item)}
            className={`makeItem__select ${
              item === type && "makeItem__select--active"
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
