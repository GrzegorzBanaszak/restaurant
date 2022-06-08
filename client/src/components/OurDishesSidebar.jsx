import { motion } from "framer-motion";
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

const OurDishesSidebar = ({ showSidebar, setShowSidebar }) => {
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
