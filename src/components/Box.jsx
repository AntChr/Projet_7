import React from "react";


const Box = ({cover, title}) => {
    return (
        <div>
            <img className ='logement-list_img' src={cover} alt={title} />
            <h2 className="logement-list_txt">{title}</h2>
            
        </div>
    )
}
export default Box