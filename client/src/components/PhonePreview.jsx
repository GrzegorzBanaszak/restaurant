import bgPhone from "../assets/phone.png";
import { cakeTypeList, ingredientsList } from "../utilis/makePizzaData";
import "../styles/components/PhonePreview.scss";
import { AiFillCheckCircle } from "react-icons/ai";

const PhonePreview = () => {
  return (
    <div className="make__phone" style={{ backgroundImage: `url(${bgPhone})` }}>
      <div className="phonePreview">
        <h3 className="phonePreview__title">Rodzaj ciasta</h3>
        <div className="phonePreview__group">
          {cakeTypeList.map((type, index) => (
            <div
              key={index}
              className={`phonePreview__select ${
                "cienkie" === type.name && "phonePreview__select--active"
              }`}
            >
              {"cienkie" === type.name && (
                <AiFillCheckCircle color="white" fontSize={30} />
              )}
              Ciasto {type.name} <b>{type.price}zł</b>
            </div>
          ))}
        </div>
        <h3 className="phonePreview__title">Składniki</h3>
        <ul className="phonePreview__list">
          {ingredientsList.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} <b>{ingredient.price}zł</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhonePreview;
