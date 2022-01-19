import { MdOutlinePhotoCamera, MdSearch } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/md';

// import Logo from '../assets/mano1.png';


const Header = () => {
   
    return(
       <div className='Header'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ManoMano_2018.png/1200px-ManoMano_2018.png" alt='logo'/>
            <div><GiHamburgerMenu /></div>
            <div className='searchBar'><MdOutlinePhotoCamera/><MdSearch/></div>
        </div>
    );
       
}

export default Header;