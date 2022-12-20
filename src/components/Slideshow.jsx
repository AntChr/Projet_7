import { useState } from "react"
import '../style/components/_slideshow.scss'
import vectorleft from '../images/vectorleft.png'
import vectorright from '../images/vectorright.png'


const Slideshow = ({slides}) => {
    const[currentIndex, setCurrentIndex] = useState(0)
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