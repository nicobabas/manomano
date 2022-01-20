import './recherche.css'
const Recherche = () => {
   
    return(
       <div className='recherche'>
           <div className="recherche_div"></div>
           <h2 className="recherche_h2">Vous avez selectionné un lavabo ?</h2>
           <div className="recherche_selection">    
                <button className="recherche-button">Rechercher un produit similaire</button>
                <button className="recherche-button">Besoin d'un tutoriel ou un conseil ?</button>
           </div>
        </div>
    );
}

export default Recherche;