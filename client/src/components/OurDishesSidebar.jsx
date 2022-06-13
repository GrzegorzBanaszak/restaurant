import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

const OurDishesSidebar = () => {
  const { showSidebar } = useSelector((state) => state.menu);

  return (
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
  );
};

export default OurDishesSidebar;
