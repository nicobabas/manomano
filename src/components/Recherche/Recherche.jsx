import './recherche.css'
const Recherche = () => {
   
    return(
       <div className='recherche'>
           <h2 className="recherche_h2">Vous avez selectionné un lavabo ?</h2>
           <div className="recherche_selection">    
                <div className="recherche-button">Rechercher un produit similaire</div>
                <div className="recherche-button">Besoin d'un tutoriel <br/>ou un conseil ?</div>
           </div>
        </div>
    );
}

export default Recherche;