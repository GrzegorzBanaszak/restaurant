import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import sidebarMenuList from "../utilis/sidebarMenuList";
import { setDishesType } from "../features/dishes/dishesSlice";
const OurDishesSidebar = () => {
  const dispatch = useDispatch();
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
          <li
            onClick={() => {
              dispatch(setDishesType(item.value));
            }}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default OurDishesSidebar;
