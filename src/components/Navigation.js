import { Link } from "react-router-dom";
import '../css/navigation.css'

const Navigation = () =>{
    return <div className='header'>
        <div className='header-link-wrap'>
            <Link to='/'>
                <span className='header-link'>Home</span>
            </Link>
            <Link to='/profile'>
                <span className='header-link'>Profiles</span>
            </Link>
            <Link to='about'>
                <span className='header-link'>About</span>
            </Link>
        </div>
    </div>
}

export default Navigation;

