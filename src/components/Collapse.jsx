import vectorup from '../images/vectorup.png';
import vectordown from '../images/vectordown.png';
import { useState} from 'react'
import '../style/components/_collapse.scss'



const Collapse = ({titre, description}) => {
    const [isOpen, setIsOpen] = useState(false)


    return isOpen ? (
        <div>
                <div className='collapseapp'>
                    <div className='collapseapp__title'>
                        <h2>{titre}</h2>
                        <span className={`collapseapp__vector__${isOpen}`} onClick={() => setIsOpen(!isOpen)}>
                        <img src={vectordown} alt='flèche bas' />
                        </span>
                    </div>
                </div>
        </div>
       
     ) : (
        <div>
            <div className='collapseapp'>
                <div className='collapseapp__title'>
                    <h2 >{titre}</h2>
                    <span className={`collapseapp__vector__${isOpen}`} onClick={() => setIsOpen(!isOpen)}>
                    <img src={vectorup} alt='flèche haut' />
                    </span>
                </div>
                <div className='collapseapp__open__txt'>
                    <p>{description}</p>
                    </div>
            </div>
        </div>
     )

}

export default Collapse

