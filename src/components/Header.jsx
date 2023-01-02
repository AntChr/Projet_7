import { Link } from 'react-router-dom'
import logo from '../images/logo.svg';
import '../style/components/_header.scss'

// Composant Header utilisable sur toutes les pages du site
function Header () {
    return (
                    <header>
                        <div className='Header_logo'>
                            <img src={logo} alt="logo" />
                        </div>
                    <nav>
                        <Link className='Header_Accueil' to="/">ACCUEIL</Link>
                        <Link className='Header_Apropos' to="/apropos">À PROPOS</Link>
                    </nav>
                    </header>
    )
}
export default Header

