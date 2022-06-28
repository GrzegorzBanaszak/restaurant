import React from "react";
import moment from "moment";
const UserOrder = ({ order }) => {
  const { orderItems, orderTotal, createdAt, payType } = order;

  return (
    <div className="user__order">
      <div className="user__row">
        <h5 className="user__row--title">
          Zamówienie z dnia {moment(createdAt).format("DD-MM-YYYY")}
        </h5>
        <ul>
          {orderItems.map(({ _id, name, price, quantity, type }) => (
            <li key={_id}>
              {name} | Ilość: {quantity} | Cena : {price}zł
            </li>
          ))}
        </ul>
      </div>
      <div className="user__row">
        <div>Forma płatności: {payType}</div>
        <div>Suma: {orderTotal} zł</div>
      </div>
    </div>
  );
};

export default UserOrder;
