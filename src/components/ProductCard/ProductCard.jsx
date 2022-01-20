import './productcard.css';

const Productcard = ({title, image, price, rating, brand, delivery}) => {
   
    return(
       <div className='productcard'>
           <div className='productcard_selection'>
               <img src={image} alt={title} />
               <div>
               <h1>{title}</h1>
               <p>{rating}</p>
               <div>
               <h3>{price}</h3>
               <button>Apercu</button>
               </div>
               </div>
           </div>
           <div>
               <p>{brand}</p>
               <p>{delivery}</p>
           </div>
        </div>
    );
}

export default Productcard;