import './productlistmal.css';
import ProductCard from '../ProductCard/ProductCard.jsx';
import { elementsMal } from '../products.js';
import { useContext, useEffect } from "react";
import HandleclickContext from "../../contexts/HandleclickContext";
import CameraOnContext from "../../contexts/CameraOnContext";

const ProductListMal = () => {
    const { setSearchOn, searchOn } = useContext(HandleclickContext);
    const { setWebcamEnabled } = useContext(CameraOnContext);

    useEffect(() => {
        setSearchOn(false);
        setWebcamEnabled(false)
      });

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