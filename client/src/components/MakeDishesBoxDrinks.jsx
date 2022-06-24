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
      <h3 className="makeItem__title">Napoje</h3>
      <div className="makeItem__elements">
        {drinkList.map((drink, index) => (
          <div
            key={index}
            className={`makeItem__element ${
              box.some((item) => item.name === drink)
                ? `${"makeItem__element--" + drink.toLowerCase()}`
                : ""
            }`}
          >
            <h3 onClick={() => handleAdding({ name: drink, price: 3.5 })}>
              {drink}
            </h3>
            {box.some((x) => x.name === drink) && (
              <div className="makeItem__size">
                <button
                  className={`makeItem__size--button ${
                    box.find((x) => x.name === drink).size === "Mała"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleAdding({ name: drink, price: 3.5, size: "Mała" })
                  }
                >
                  Mały
                </button>
                <button
                  className={`makeItem__size--button ${
                    box.find((x) => x.name === drink).size === "Średnia"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleAdding({ name: drink, price: 5, size: "Średnia" })
                  }
                >
                  Średni
                </button>
                <button
                  className={`makeItem__size--button ${
                    box.find((x) => x.name === drink).size === "Duży"
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleAdding({ name: drink, price: 6.5, size: "Duży" })
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
