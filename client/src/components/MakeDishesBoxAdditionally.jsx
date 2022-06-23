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
      <h3 className="makeBox__title">Dodatki</h3>
      <div className="makeBox__extras">
        {additionallyList.map((additionally, index) => (
          <div
            className={`makeBox__extra ${
              box.some((item) => item.name === additionally.name)
                ? "makeBox__extra--active"
                : ""
            }`}
            key={index}
          >
            <b>{additionally.price} zł/szt</b>
            <h4
              onClick={() =>
                handleAdd({
                  name: additionally.name,
                  size: additionally.size ? additionally.size[0] : null,
                  price: additionally.price,
                })
              }
            >
              {additionally.name}
            </h4>

            {box.some((item) => item.name === additionally.name) && (
              <>
                {additionally.size && (
                  <div className="makeBox__size">
                    {additionally.size.map((size, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          dispatch(
                            changeAdditionSize({
                              name: additionally.name,
                              size,
                            })
                          )
                        }
                        className={`makeBox__size--button ${
                          box.find((i) => i.name === additionally.name).size ===
                          size
                            ? "active"
                            : ""
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}

                <div className="makeBox__control">
                  <button
                    className="makeBox__control--minus"
                    onClick={() =>
                      dispatch(decreaseQuantityBox(additionally.name))
                    }
                  >
                    -
                  </button>
                  <div className="makeBox__control--quantity">
                    {box.find((i) => i.name === additionally.name).quantity}
                  </div>
                  <button
                    className="makeBox__control--plus"
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
