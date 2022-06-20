import { useState } from "react";
import "../styles/components/MakeDishesPizza.scss";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  cakeTypeList,
  defPizza,
  typeList,
  ingredientsList,
} from "../utilis/makePizzaData";

const MakeDishesPizza = () => {
  const [pizza, setPizza] = useState(defPizza);

  const handleChange = (type, value) => {
    setPizza((prev) => ({ ...prev, [type]: value }));
  };

  const handleChangeIngredients = (value) => {
    if (pizza.ingredients.includes(value)) {
      setPizza((prev) => ({
        ...prev,
        ingredients: prev.ingredients.filter((item) => item !== value),
      }));
    } else {
      setPizza((prev) => ({
        ...prev,
        ingredients: [...prev.ingredients, value],
      }));
    }
  };

  return (
    <section className="makePizza">
      <h3 className="makePizza__title">Typ tworzenia</h3>
      <div className="makePizza__type">
        {typeList.map((type, index) => (
          <div
            key={index}
            onClick={() => handleChange("type", type)}
            className={`makePizza__type--btn ${
              pizza.type === type && "makePizza__type--active"
            }`}
          >
            {pizza.type === type && (
              <AiFillCheckCircle color="white" fontSize={30} />
            )}
            Pizza {type}
          </div>
        ))}
      </div>
      <h3 className="makePizza__title">Rodzaj ciasta</h3>
      <div className="makePizza__type">
        {cakeTypeList.map((type, index) => (
          <div
            key={index}
            onClick={() => handleChange("cake", type)}
            className={`makePizza__type--btn ${
              pizza.cake === type && "makePizza__type--active"
            }`}
          >
            {pizza.cake === type && (
              <AiFillCheckCircle color="white" fontSize={30} />
            )}
            Ciasto {type}
          </div>
        ))}
      </div>
      <h3 className="makePizza__title">Składniki</h3>
      <ul className="makePizza__list">
        {ingredientsList.map((ingredient, index) => (
          <li
            onClick={() => handleChangeIngredients(ingredient)}
            className={`${
              pizza.ingredients.includes(ingredient) ? "selected" : ""
            }`}
            key={index}
          >
            {ingredient}
          </li>
        ))}
      </ul>
      <h3 className="makePizza__title">Podsumowanie</h3>
    </section>
  );
};

export default MakeDishesPizza;
