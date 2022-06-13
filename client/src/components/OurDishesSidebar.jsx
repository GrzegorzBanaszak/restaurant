import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import sidebarMenuList from "../utilis/sidebarMenuList";
import { setDishesType } from "../features/dishes/dishesSlice";
import { toggleSidebar } from "../features/menu/menuSlice";
const OurDishesSidebar = () => {
  const dispatch = useDispatch();
  const { showSidebar } = useSelector((state) => state.menu);

  const handleClick = (value) => {
    dispatch(setDishesType(value));
    dispatch(toggleSidebar());
  };

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
              handleClick(item.value);
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
