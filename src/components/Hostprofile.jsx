import React from "react";
import '../style/components/_hostprofile.scss'


const Hostprofile = ({name,picture}) => {
    return (
        <div className="logement__host">
            <h3>{name}</h3> 
            <div className="logement__host__picture">
                <img src={picture} alt="profile du propriétaire" />
            </div>
        </div>
    )
}
export default Hostprofile