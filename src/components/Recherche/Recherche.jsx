import "./recherche.css";
import { useContext, useEffect } from "react";
import HandleclickContext from "../../contexts/HandleclickContext";
import CameraContext from "../../contexts/CameraContext";

const Recherche = () => {
  const { detection } = useContext(CameraContext);
  const { setSearchOn, searchOn } = useContext(HandleclickContext);
  useEffect(() => {
    detection.forEach(
      (obj) =>
        obj.class === "person" &&
        setSearchOn(true)
    );
  });
  console.log(searchOn);
  return (
    <div className={`recherche ${searchOn ? "active" : ""}`}>
      <h2 className="recherche_h2">Vous avez selectionné un lavabo ?</h2>
      <div className="recherche_selection">
        <div className="recherche-button">Rechercher un produit similaire</div>
        <div className="recherche-button">
          Besoin d'un tutoriel <br />
          ou un conseil ?
        </div>
      </div>
    </div>
  );
};

export default Recherche;
