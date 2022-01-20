import './productcard.css';
import { FaRegEye } from 'react-icons/fa';

const Productcard = ({title, image, price, brand, delivery}) => {
   
    return(
       <div className='productcard'>
           <div className='productcard_selection'>
           
               <img src={image} alt={title} />
               <div>
                <h1>{title}</h1>
                <div className='button'>
                    <h3>{price}</h3>
                 <a href='aperçu'><FaRegEye /> Apercu</a>
                </div>
               </div>
           </div>
           <div>
               <img src={brand} alt="brand"/>
               <p>{delivery}</p>
           </div>
        </div>
    );
}

export default Productcard;