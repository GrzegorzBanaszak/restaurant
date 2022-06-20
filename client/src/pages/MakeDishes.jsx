import { useState } from "react";
import "../styles/components/MakeDishes.scss";
import { FaPizzaSlice } from "react-icons/fa";
import { GiChickenLeg, GiSandwich } from "react-icons/gi";
import MakeDishesPizza from "../components/MakeDishesPizza";
const MakeDishes = () => {
  const [makeSelect, setMakeSelect] = useState("");
  return (
    <section className="makeDishes">
      <div className="makeDishes__container">
        <div className="makeDishes__header">
          <button
            style={{ flexGrow: makeSelect === "pizza" ? 3 : 1 }}
            onClick={() => setMakeSelect("pizza")}
          >
            <FaPizzaSlice /> Custom pizza
          </button>
          <button
            style={{ flexGrow: makeSelect === "chicken" ? 3 : 1 }}
            onClick={() => setMakeSelect("chicken")}
          >
            <GiChickenLeg /> Custom chicken
          </button>
          <button
            style={{ flexGrow: makeSelect === "sandwich" ? 3 : 1 }}
            onClick={() => setMakeSelect("sandwich")}
          >
            <GiSandwich /> Custom sandwiches
          </button>
        </div>
        <MakeDishesPizza />
      </div>
    </section>
  );
};

export default MakeDishes;
