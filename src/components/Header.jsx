import { Link } from 'react-router-dom'
import logo from '../images/logo.svg';
import '../style/components/_header.scss'

function Header () {
    return (
                    <header>
                    <img src={logo} className="Header_logo" alt="logo" />
                    <nav>
                        <Link className='Header_Accueil' to="/">Accueil</Link>
                        <Link className='Header_Apropos'to="/apropos">À propos</Link>
                    </nav>
                    </header>
    )
}

export default Header