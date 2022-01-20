import './productlistmal.css';
import ProductCard from '../ProductCard/ProductCard.jsx';
import {elementsMal} from '../products.js';

const ProductListMal = () => {
   
    return(
       <div className='productListMal'>
          
            {elementsMal.map((elementMal) => (
           <ProductCard
           title={elementMal.title} 
           image={elementMal.image} 
           price={elementMal.price} 
           brand={elementMal.brand}
           />
           ))
        }
        
        </div>
    );
}

export default ProductListMal;