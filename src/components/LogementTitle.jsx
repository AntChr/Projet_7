import React from "react";
import '../style/components/_logementtitle.scss'


const LogementTitle = ({title,location}) => {
    return (
        <div className="logement__title">
            <h2>{title}</h2>
            <p>{location}</p> 
        </div>
    )
}
export default LogementTitle