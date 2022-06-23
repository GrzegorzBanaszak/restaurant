import React from "react";
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
      <h3 className="makeBox__title">Składniki</h3>
      <div>
        {ingredientsList.map(({ name, price, description }, index) => (
          <div
            key={index}
            className={`makeBox__item ${
              box.some((i) => i.name === name) ? "makeBox__item--active" : ""
            }`}
          >
            <div className="makeBox__item--icon">
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
            <h4 className="makeBox__item--name">{name}</h4>
            <p className="makeBox__item--description">{description}</p>
            <div className="makeBox__item--price">
              {price.toFixed(2)} zł/szt
            </div>
            {box.some((i) => i.name === name) && (
              <div className="makeBox__control">
                <button
                  className="makeBox__control--minus"
                  onClick={() => dispatch(decreaseQuantityBox(name))}
                >
                  -
                </button>
                <div className="makeBox__control--quantity">
                  {box.find((i) => i.name === name).quantity}
                </div>
                <button
                  className="makeBox__control--plus"
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
