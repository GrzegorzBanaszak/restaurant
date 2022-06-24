import { ingredientsList } from "../utilis/makeBoxData";
import { useDispatch, useSelector } from "react-redux";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import {
  setPizzaIngredients,
  increaseQuantityBox,
  decreaseQuantityBox,
} from "../features/make/makeSlice";
const MakeDishesBoxIngredients = () => {
  const { box } = useSelector((state) => state.make);
  const dispatch = useDispatch();

  const handleAdding = (item) => {
    dispatch(setPizzaIngredients(item));
  };
  return (
    <>
      <h3 className="makeItem__title">Składniki</h3>
      <div>
        {ingredientsList.map(({ name, price, description }, index) => (
          <div
            key={index}
            className={`makeItem__box ${
              box.some((i) => i.name === name) ? "makeItem__box--active" : ""
            }`}
          >
            <div className="makeItem__box--icon">
              {box.some((i) => i.name === name) ? (
                <AiFillMinusCircle
                  fontSize={30}
                  onClick={() =>
                    handleAdding({
                      name,
                      price,
                      description,
                    })
                  }
                />
              ) : (
                <AiFillPlusCircle
                  fontSize={30}
                  onClick={() =>
                    handleAdding({
                      name,
                      price,
                      description,
                    })
                  }
                />
              )}
            </div>
            <h4 className="makeItem__box--name">{name}</h4>
            <p className="makeItem__box--description">{description}</p>
            <div className="makeItem__box--price">
              {price.toFixed(2)} zł/szt
            </div>
            {box.some((i) => i.name === name) && (
              <div className="makeItem__control">
                <button
                  className="makeItem__control--minus"
                  onClick={() => dispatch(decreaseQuantityBox(name))}
                >
                  -
                </button>
                <div className="makeItem__control--quantity">
                  {box.find((i) => i.name === name).quantity}
                </div>
                <button
                  className="makeItem__control--plus"
                  onClick={() => dispatch(increaseQuantityBox(name))}
                >
                  +
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MakeDishesBoxIngredients;
