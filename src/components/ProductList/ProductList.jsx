import './productcard.css';
import ProductCard from '../ProductCard/ProductCard.jsx'
import products from '../products';

const ProductList = () => {
   
    return(
       <div className='productList'>
          
            {products.map((product) => (
           <ProductCard
           key={product._id} 
           title={product.title} 
           image={product.image} 
           price={product.title} 
           rating={product.rating}
           brand={product.brand}
           delivery={product.delivery} />
           ))
        }
        
        </div>
    );
}

export default ProductList;