import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { additionallyList } from "../utilis/makeBoxData";
import {
  changeAddition,
  increaseQuantityBox,
  decreaseQuantityBox,
  changeAdditionSize,
} from "../features/make/makeSlice";
const MakeDishesBoxAdditionally = () => {
  const { box } = useSelector((state) => state.make);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(changeAddition(item));
  };
  return (
    <>
      <h3 className="makeItem__title">Dodatki</h3>
      <div className="makeItem__elements">
        {additionallyList.map((additionally, index) => (
          <div
            className={`makeItem__element ${
              box.some((item) => item.name === additionally.name)
                ? "makeItem__element--active"
                : ""
            }`}
            key={index}
          >
            <h4
              onClick={() =>
                handleAdd({
                  name: additionally.name,
                  size: additionally.size ? additionally.size[0].name : null,
                  price: additionally.size
                    ? additionally.size[0].price
                    : additionally.price,
                })
              }
            >
              {additionally.name}
            </h4>

            {box.some((item) => item.name === additionally.name) && (
              <>
                {additionally.size && (
                  <div className="makeItem__size">
                    {additionally.size.map((size, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          dispatch(
                            changeAdditionSize({
                              name: additionally.name,
                              size: size.name,
                              price: size.price,
                            })
                          )
                        }
                        className={`makeItem__size--button ${
                          box.find((i) => i.name === additionally.name).size ===
                          size.name
                            ? "active"
                            : ""
                        }`}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                )}

                <div className="makeItem__control">
                  <button
                    className="makeItem__control--minus"
                    onClick={() =>
                      dispatch(decreaseQuantityBox(additionally.name))
                    }
                  >
                    -
                  </button>
                  <div className="makeItem__control--quantity">
                    {box.find((i) => i.name === additionally.name).quantity}
                  </div>
                  <button
                    className="makeItem__control--plus"
                    onClick={() =>
                      dispatch(increaseQuantityBox(additionally.name))
                    }
                  >
                    +
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MakeDishesBoxAdditionally;
