import "./recherche.css";
import { useContext, useEffect, useState } from "react";
import HandleclickContext from "../../contexts/HandleclickContext";
import CameraContext from "../../contexts/CameraContext";
import CameraOnContext from "../../contexts/CameraOnContext";
import Categories from "../Categories/Categories";
import Tutos from "../tuto/Tuto";
import { AiFillCloseCircle } from "react-icons/ai";

const Recherche = () => {
  const { detection } = useContext(CameraContext);
  const { setSearchOn, searchOn } = useContext(HandleclickContext);
  const { setWebcamEnabled } = useContext(CameraOnContext);
  const [tutosOn, setTutosOn] = useState(false);
  const [search, setSearch] = useState("");
  const [catOn, setCatOn] = useState(false);

  useEffect(() => {
    detection.forEach((obj) => {
      if (obj.class === "person") {
        setSearchOn(true);
        //setWebcamEnabled(false);
        setSearch(obj.class === "person" && "personne");
      }
    });
  });

  return (
    <>
      <div className={`recherche ${searchOn ? "active" : ""}`}>
        <div
          className="close"
          onClick={() => {
            setSearchOn(!searchOn);
            setWebcamEnabled(false);
          }}
        >
          <AiFillCloseCircle />
        </div>
        <h2 className="recherche_h2">Vous avez recherché {`"${search}"`} ?</h2>
        <div className="recherche_selection">
          <button className="recherche-button" onClick={() => setCatOn(!catOn)}>
            Rechercher un produit similaire
          </button>
          <button
            className="recherche-button"
            onClick={() => {
              setTutosOn(!tutosOn);
              setSearchOn(!searchOn);
            }}
          >
            Besoin d'un tutoriel <br />
            ou un conseil ?
          </button>
        </div>
      </div>
      <Tutos
        setTutosOn={setTutosOn}
        tutosOn={tutosOn}
        setSearchOn={setSearchOn}
        searchOn={searchOn}
      />
      <Categories catOn={catOn} />
    </>
  );
};

export default Recherche;
