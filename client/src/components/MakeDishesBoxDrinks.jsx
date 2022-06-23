import React from "react";
import { drinkList } from "../utilis/makeBoxData";
import { useDispatch, useSelector } from "react-redux";
import { changeDrink } from "../features/make/makeSlice";
const MakeDishesBoxDrinks = () => {
  const { box } = useSelector((state) => state.make);
  const dispatch = useDispatch();
  const handleAdding = (item) => {
    dispatch(changeDrink(item));
  };
  return (
    <>
      <h3 className="makeBox__title">Napoje</h3>
      <div className="makeBox__extras">
        {drinkList.map((drink, index) => (
          <div
            key={index}
            className={`makeBox__extra ${
              box.some((item) => item.name === drink)
                ? "makeBox__extra--active"
                : ""
            }`}
          >
            <h3
              onClick={() =>
                handleAdding({ name: drink, price: 3.5, size: "small" })
              }
            >
              {drink}
            </h3>
            {box.some((x) => x.name === drink) && (
              <div className="makeBox__size">
                <button
                  className={`makeBox__size--button ${
                    box.find((x) => x.name === drink).size === "small"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleAdding({ name: drink, price: 3.5, size: "small" })
                  }
                >
                  Mały
                </button>
                <button
                  className={`makeBox__size--button ${
                    box.find((x) => x.name === drink).size === "medium"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleAdding({ name: drink, price: 5, size: "medium" })
                  }
                >
                  Średni
                </button>
                <button
                  className={`makeBox__size--button ${
                    box.find((x) => x.name === drink).size === "big"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleAdding({ name: drink, price: 6.5, size: "big" })
                  }
                >
                  Duży
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MakeDishesBoxDrinks;
