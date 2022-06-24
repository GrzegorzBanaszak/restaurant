import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addToCart } from "../features/cart/cartSlice";
import { reset } from "../features/make/makeSlice";
const MakeDishesBoxSummary = () => {
  const { box } = useSelector((state) => state.make);
  const dispatch = useDispatch();
  const getSum = () => {
    let sum = 0;
    box.forEach((item) => {
      sum += item.quantity ? item.price * item.quantity : item.price;
    });
    return sum.toFixed(2);
  };

  const reduceBox = () => {
    return box.reduce((acc, item) => {
      acc.push(
        `${item.name} ${item.size ? item.size : ""} | ${item.quantity} szt`
      );
      return acc;
    }, []);
  };

  const addBox = () => {
    if (box.length > 0) {
      dispatch(
        addToCart({
          _id: uuidv4(),
          actionType: "PLUS",
          type: "box",
          name: "Box składany",
          price: getSum(),
          ingredients: reduceBox(),
        })
      );
      dispatch(reset());
    }
  };
  return (
    <>
      <h3 className="makeItem__title">Podsumowanie</h3>
      <div className="makeItem__summary">
        <div className="makeItem__grid">
          <div className="makeItem__grid--header">Nazwa</div>
          <div className="makeItem__grid--header">Ilość</div>
          <div className="makeItem__grid--header">Cena</div>
          {box.map(({ name, quantity, price, size }, index) => (
            <React.Fragment key={index}>
              <div className="makeItem__grid--item">
                {name} {size && size}
              </div>
              <div className="makeItem__grid--item">
                {quantity ? (price * quantity).toFixed(2) : price} zł
              </div>
              <div className="makeItem__grid--item">
                {quantity ? quantity : 1} sztuki
              </div>
            </React.Fragment>
          ))}
          <div className="makeItem__grid--summary">Suma do zapłaty:</div>
          <div className="makeItem__grid--summary">{getSum()} zł</div>
          <div className="makeItem__grid--summary">
            <button className="makeItem__grid--btn" onClick={addBox}>
              <FiShoppingCart /> Dodaj
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeDishesBoxSummary;
