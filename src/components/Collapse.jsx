import arrowup from '../images/arrowup.svg';
import arrowdown from '../images/arrowdown.svg';
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

function Collapse () {
    const { id } = useParams()
    const [isOpen, setIsOpen] = useState(true)
    const [logementData, setLogementData] = useState({})
    let logmtdata = logementData.find(el => el.id === id)
    useEffect(() => {
        fetch("../logements.json")
             .then((response) => response.json()
             .then((data) => setLogementData(data))
             .catch((error) => console.log("help"))
         )
     }, [])

     return isOpen ? (
        <div className='collapse_open'>
            <div className='collapse_open_title'>
            <h2>Équipements</h2>
            <button className='collapse_open_button' 
            onClick={() => setIsOpen(false)}>
                <img src={arrowup} className='collapse_open_button_arrowup' alt='flèche haut' />
            </button>
            </div>
            <div className='equipment_list'>
            <p>{logmtdata.equipements}</p>
            </div>
        </div>
     ) : (
        <div className='collapse_closed_title'>
            <h2>Équipements</h2>
            <button className='collapse_closed_button' 
            onClick={() => setIsOpen(true)}>
                <img src={arrowdown} className='collapse_open_button_arrowdown' alt='flèche bas' />
            </button>
            </div>
     )


}

export default Collapse

