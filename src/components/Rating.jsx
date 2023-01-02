import React from "react";
import Star from '../images/Star.png';
import Starempty from '../images/Starempty.png';

// Affichage de l'évaluation du logement représenté par un nombre d'étoiles
const Rating = ({rating}) => {
    const stars =[];
    for (let i =0; i < rating; i++) {
        stars.push(<img src={Star} alt="étoiles" key={i} />);
    }
    const starsempty =[];
    for (let i =0; i < (5-rating); i++) {
        starsempty.push(<img src={Starempty} alt="étoiles vides" key={i} />);
    }
    return (
        <div className="logement__rating">
                {stars}
                {starsempty}
        </div>
    )
}
export default Rating

