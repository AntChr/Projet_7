import React from "react";
import '../style/components/_logementtitle.scss'


const LogementTitle = ({title,location}) => {
    return (
        <div className="container__description__tiloctag__tiloc">
            <div className="container__description__tiloctag__tiloc__title">
                <h2>{title}</h2>
            </div>
            <div className="container__description__tiloctag__tiloc__location">
                <p>{location}</p>
            </div> 
        </div>
    )
}
export default LogementTitle