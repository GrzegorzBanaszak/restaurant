import { useSelector, useDispatch } from "react-redux";
import { cakeTypeList, ingredientsList } from "../utilis/makePizzaData";
import { setIngredient, setCakeType, reset } from "../features/make/makeSlice";
import { addToCart } from "../features/cart/cartSlice";
import { v4 as uuidv4 } from "uuid";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";

const PizzaOwn = () => {
  const dispatch = useDispatch();
  const { pizza } = useSelector((state) => state.make);

  const handleChange = (value) => {
    dispatch(setCakeType(value));
  };

  const handleChangeIngredients = (value) => {
    dispatch(setIngredient(value));
  };

  const addPizza = () => {
    dispatch(
      addToCart({
        _id: uuidv4(),
        actionType: "PLUS",
        type: "pizza",
        name: "Pizza ciasto " + pizza.cake,
        price: pizza.price,
        ingredients: pizza.ingredients,
      })
    );
    dispatch(reset());
  };
  return (
    <>
      <h3 className="makeItem__title">Rodzaj ciasta</h3>
      <div className="makeItem__group">
        {cakeTypeList.map((type, index) => (
          <div
            key={index}
            onClick={() => handleChange(type)}
            className={`makeItem__select ${
              pizza.cake === type.name && "makeItem__select--active"
            }`}
          >
            {pizza.cake === type.name && (
              <AiFillCheckCircle color="white" fontSize={30} />
            )}
            Ciasto {type.name} <b>{type.price}zł</b>
          </div>
        ))}
      </div>
      <h3 className="makeItem__title">Składniki</h3>
      <ul className="makeItem__list">
        {ingredientsList.map((ingredient, index) => (
          <li
            onClick={() => handleChangeIngredients(ingredient)}
            className={`${
              pizza.ingredients.includes(ingredient.name) ? "selected" : ""
            }`}
            key={index}
          >
            {ingredient.name} <b>{ingredient.price}zł</b>
          </li>
        ))}
      </ul>
      <h3 className="makeItem__title">Podsumowanie</h3>
      <div className="makeItem__summary--flex">
        <div className="makeItem__col makeItem__col--type">
          <h4>Typ ciasta</h4>
          <p>{pizza.cake}</p>
        </div>
        <div className="makeItem__col makeItem__col--ingredients">
          <h4>Składniki</h4>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="makeItem__col makeItem__col--price">
          <h4>Cena: {pizza.price} zł</h4>
          <button onClick={addPizza} className="makeItem__summary--btn">
            <FiShoppingCart /> Dodaj
          </button>
        </div>
      </div>
    </>
  );
};

export default PizzaOwn;
