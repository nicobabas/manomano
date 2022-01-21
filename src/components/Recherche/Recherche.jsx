import "./recherche.css";
import { useContext, useEffect, useState } from "react";
import HandleclickContext from "../../contexts/HandleclickContext";
import CameraContext from "../../contexts/CameraContext";
import Categories from "../Categories/Categories";
import Tutos from "../tuto/Tuto";
import { AiFillCloseCircle } from "react-icons/ai";

const Recherche = () => {
  const { detection } = useContext(CameraContext);
  const { setSearchOn, searchOn } = useContext(HandleclickContext);
  const [tutosOn, setTutosOn] = useState(false);
  const [catOn, setCatOn] = useState(false);

  useEffect(() => {
    detection.forEach((obj) => obj.class === "cell phone" && setSearchOn(true));
  });
  console.log(searchOn);
  
  return (
    <>
      <div className={`recherche ${searchOn ? "active" : ""} `}>
        <div className="close" onClick={() => setSearchOn(!searchOn)}>
          <AiFillCloseCircle />
        </div>
        <h2 className="recherche_h2">Vous avez selectionné un lavabo ?</h2>
        <div className="recherche_selection">
          <button className="recherche-button" onClick={() => { setCatOn(!catOn); setSearchOn(true) }}>
            Rechercher un produit similaire
          </button>
          <button
            className="recherche-button"
            onClick={() => { setTutosOn(!tutosOn); setSearchOn(true) }}
          >
            Besoin d'un tutoriel <br />
            ou un conseil ?
          </button>
        </div>
      </div>
      <Tutos setTutosOn={setTutosOn} tutosOn={tutosOn} setSearchOn={setSearchOn} searchOn={searchOn} />
      <Categories setCatOn={setCatOn} catOn={catOn} setSearchOn={setSearchOn} searchOn={searchOn} />
    </>
  );
};

export default Recherche;
