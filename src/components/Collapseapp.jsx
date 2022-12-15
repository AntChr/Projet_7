import arrowup from '../images/arrowup.svg';
import arrowdown from '../images/arrowdown.svg';
import { useState} from 'react'


function CollapseApp () {
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className='collapseapp_open'>
            <div className='collapseappapp_open_title'>
            <h2>Fiabilité</h2>
            <button className='collapseapp_open_button' 
            onClick={() => setIsOpen(false)}>
                <img src={arrowup} className='collapseapp_open_button_arrowup' alt='flèche haut' />
            </button>
            </div>
            <div className='valeur_txt'>
            <p></p>
            </div>

            <div className='collapseappapp_open_title'>
            <h2>Respect</h2>
            <button className='collapseapp_open_button' 
            onClick={() => setIsOpen(false)}>
                <img src={arrowup} className='collapseapp_open_button_arrowup' alt='flèche haut' />
            </button>
            </div>
            <div className='valeur_txt'>
            <p>La Bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>
            </div>

            <div className='collapseappapp_open_title'>
            <h2>Service</h2>
            <button className='collapseapp_open_button' 
            onClick={() => setIsOpen(false)}>
                <img src={arrowup} className='collapseapp_open_button_arrowup' alt='flèche haut' />
            </button>
            </div>
            <div className='valeur_txt'>
            <p></p>
            </div>

            <div className='collapseappapp_open_title'>
            <h2>Responsabilité</h2>
            <button className='collapseapp_open_button' 
            onClick={() => setIsOpen(false)}>
                <img src={arrowup} className='collapseapp_open_button_arrowup' alt='flèche haut' />
            </button>
            </div>
            <div className='valeur_txt'>
            <p></p>
            </div>
        </div>
        
     ) : (
        <div className='collapseapp_closed_title'>
            <h2>Fiabilité</h2>
            <button className='collapseapp_closed_button' 
            onClick={() => setIsOpen(true)}>
                <img src={arrowdown} className='collapseapp_open_button_arrowdown' alt='flèche bas' />
            </button>

            <div className='collapseapp_closed_title'>
            <h2>Respect</h2>
            <button className='collapseapp_closed_button' 
            onClick={() => setIsOpen(true)}>
                <img src={arrowdown} className='collapseapp_open_button_arrowdown' alt='flèche bas' />
            </button>
            </div>

            <div className='collapseapp_closed_title'>
            <h2>Service</h2>
            <button className='collapseapp_closed_button' 
            onClick={() => setIsOpen(true)}>
                <img src={arrowdown} className='collapseapp_open_button_arrowdown' alt='flèche bas' />
            </button>
            </div>

            <div className='collapseapp_closed_title'>
            <h2>Responsabilité</h2>
            <button className='collapseapp_closed_button' 
            onClick={() => setIsOpen(true)}>
                <img src={arrowdown} className='collapseapp_open_button_arrowdown' alt='flèche bas' />
            </button>
            </div>
            
            </div>
            
     )

}

export default CollapseApp