import "./categories.css";
import { filtres } from "../products.js";

const Categories = ({ setCatOn, catOn }) => {
  return (
    <div className={`categories ${catOn && "active"}`} onClick={() => {
        setTimeout(() => {
            setCatOn(!catOn);
        }, 100);
      }}>
      {filtres.map((filtre) => (
        <div className="categories_presentation">
          <h3 className="categories_h3">{filtre.name}</h3>
          <a href={filtre.lien}>
            <img className="categories-image" src={filtre.image} alt="lavabo" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Categories;
