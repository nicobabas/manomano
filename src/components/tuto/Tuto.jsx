import './tuto.css';
import { useContext } from 'react';
import HandleclickContext from '../../contexts/HandleclickContext';
import {tutoLavabos} from  '../products.js';

const Tutos = () => {
    const { tutosOn } = useContext(HandleclickContext);
   
    return(
       <div className={`tutos ${tutosOn && 'active'}`}>
           { tutoLavabos.map(tutoLavabo => (
           <div className="tutos_presentation">    
            <h3 className='tutos_h3'>{tutoLavabo.title}</h3>
            <a href={tutoLavabo.lien}><img className='tutos-image' src={tutoLavabo.image} alt='tutos'/></a>
           </div>
           ))}
        </div>
    );
}

export default Tutos;