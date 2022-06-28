import React from "react";
import "../styles/components/User.scss";
import { useDispatch, useSelector } from "react-redux";
import UserOrder from "../components/UserOrder";
import { useEffect } from "react";
import { getOrders } from "../features/orders/ordersSlice";
import Spinner from "../components/Spinner";
const User = () => {
  const { user, token } = useSelector((state) => state.auth);
  const { orders, isLoading } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!orders) {
      dispatch(getOrders(token));
    }
  }, [orders, isLoading]);

  if (isLoading || !orders || !user) {
    return <Spinner color="#b71c1c" />;
  }
  return (
    <section className="user">
      <div className="user__container">
        <h3 className="user__title">Nazwa użytkownika: {user.email}</h3>
        <section className="user__orders">
          <h4>Zamówienia</h4>
          {orders.map((order) => (
            <UserOrder key={order._id} order={order} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default User;
