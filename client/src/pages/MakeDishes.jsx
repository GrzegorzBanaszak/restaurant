import { useEffect, useState } from "react";
import "../styles/components/MakeDishes.scss";
import "../styles/components/MakeItem.scss";
import { FaPizzaSlice } from "react-icons/fa";
import { GiChickenLeg, GiSandwich } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import MakeDishesPizza from "../components/MakeDishesPizza";
import { useSelector } from "react-redux";
import MakeDishesSandwich from "../components/MakeDishesSandwich";
import MakeDishesBox from "../components/MakeDishesBox";
const MakeDishes = () => {
  const nav = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      nav("/login");
    }
  }, []);
  const [makeSelect, setMakeSelect] = useState("pizza");

  const renderBeSelect = () => {
    if (makeSelect === "pizza") {
      return <MakeDishesPizza />;
    }
    if (makeSelect === "sandwich") {
      return <MakeDishesSandwich />;
    }
    if (makeSelect === "chicken") {
      return <MakeDishesBox />;
    }
  };
  return (
    <section className="makeDishes">
      <div className="makeDishes__container">
        <div className="makeDishes__header">
          <button
            style={{ flexGrow: makeSelect === "pizza" ? 3 : 1 }}
            onClick={() => setMakeSelect("pizza")}
          >
            <FaPizzaSlice /> Stwórz pizzę
          </button>
          <button
            style={{ flexGrow: makeSelect === "chicken" ? 3 : 1 }}
            onClick={() => setMakeSelect("chicken")}
          >
            <GiChickenLeg /> Stwórz kubełek kurczaka
          </button>
          <button
            style={{ flexGrow: makeSelect === "sandwich" ? 3 : 1 }}
            onClick={() => setMakeSelect("sandwich")}
          >
            <GiSandwich /> Stwórz kanapkę
          </button>
        </div>
        {renderBeSelect()}
      </div>
    </section>
  );
};

export default MakeDishes;
