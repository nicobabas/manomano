import './productcard.css';
import { FaRegEye } from 'react-icons/fa';
import { RiTruckLine } from 'react-icons/ri';

const Productcard = ({title, image, price, brand, link}) => {
   
    return(
        <div className='productcard'>
           <div className='productcard_selection'>
               <a href={link}>
               <img className='productcard_image' src={image} alt={title} />
               </a>
               <img className='productcard_brand' src={brand} alt="brand"/>
            </div>
            <div className='productcard-text'>
                <h1 className='productcard_title'>{title}</h1>
                <div onClick='/products/slider'>
                <a className='productcard_apercu' href='/products/slider'>Voir un Apercu<FaRegEye className="apercu-icon"/> </a>
                </div>
                <h3 className='productcard_price'>{price}</h3>
                <p className='productcard_livraison'><RiTruckLine className='truck'/> Livraison gratuite</p>
            </div>
        </div>
    );
}

export default Productcard;