import React from "react";
import Nav from "./Nav";
import "../styles/components/OurDishes.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const sidebarMenuList = [
  {
    id: 1,
    name: "Pizza",
    value: "pizza",
  },
  {
    id: 2,
    name: "Burgery",
    value: "burgery",
  },
];
const OurDishes = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <Nav />
      <section className="dishes">
        <div className="dishes__container">
          <motion.div
            className="dishes__sidebar"
            initial={{ left: "-100%" }}
            animate={{
              left: showSidebar ? "0" : "-100%",
              transition: { duration: 0.5 },
            }}
          >
            <ul>
              {sidebarMenuList.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </motion.div>
          <section className="dishes__content">
            <h2 className="dishes__title">Pizza</h2>
          </section>
        </div>
      </section>
    </>
  );
};

export default OurDishes;
