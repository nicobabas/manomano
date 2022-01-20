import './productlistlavabo.css';
import ProductCard from '../ProductCard/ProductCard.jsx';
import {elementsLavabo} from '../products.js';

const ProductListLavabo = () => {
   
    return(
    <div className='productListlavabo'>
        <div className='productListlavabo_div'>
            {elementsLavabo.map((elementLavabo) => (
           <ProductCard
           title={elementLavabo.title} 
           image={elementLavabo.image} 
           price={elementLavabo.price} 
           brand={elementLavabo.brand}
           link={elementLavabo.link}
           />
           ))
        }
        </div>
    </div>
    );
}

export default ProductListLavabo;