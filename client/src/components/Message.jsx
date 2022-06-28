import React from "react";
import "../styles/components/Message.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { closeMessage } from "../features/message/messageSlice";
import { MdError } from "react-icons/md";
const Message = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);
  return (
    <div className="message">
      <div className="message__container">
        <div className="message__close">
          <AiFillCloseCircle onClick={() => dispatch(closeMessage())} />
        </div>
        <h3 className="message__title">
          <MdError /> Uwaga
        </h3>
        <p className="message__text">{message}</p>
      </div>
    </div>
  );
};

export default Message;
