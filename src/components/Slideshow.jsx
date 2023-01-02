import { useState, useEffect } from "react"
import '../style/components/_slideshow.scss'
import vectorleft from '../images/vectorleft.png'
import vectorright from '../images/vectorright.png'

//Carrousel qui affiche les photos du logement qui défilent automatiquement ou on peut cliquer sur les flèches pour passer à la suivante
const Slideshow = ({slides}) => {
    const[currentIndex, setCurrentIndex] = useState(0)
    const delay = 3500
    const autoScroll = true
    let slideInterval
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1
        const newIndex = isLastSlide ? 0 : currentIndex +1
        setCurrentIndex(newIndex);
    }
    const auto = () => {
        slideInterval = setInterval(goToNext, delay)
    }
    
    useEffect(()=> {
        if(autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentIndex])
return (
    <div className="container__carroussel">
        <div className="container__carroussel__left" onClick={goToPrevious}>
            <img  src={vectorleft} alt="précédent" />
        </div>
        <div className="container__carroussel__backgroundimg">
            <img src={slides[currentIndex]} alt="location"/>
        </div>
        <div className="container__carroussel__right" onClick={goToNext}>
            <img  src={vectorright} alt="suivante" />
        </div>
        <div className="container__carroussel__pagenumber">
            {`${currentIndex + 1}/${slides.length}`}
        </div>
    </div>

)
}
export default Slideshow