//import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import logements from '../ressources/logements.json'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import "../style/components/_logement.scss"
import LogementTitle from "../components/LogementTitle";
import Hostprofile from "../components/Hostprofile";
import Rating from "../components/Rating";
import Slideshow from "../components/Slideshow";

//Structure de la fiche logement, utilisation de plusieurs composants pour afficher le carrousel et la description du logement
function Logement() {
  const params = useParams();
  const logementID = logements.find(x => x.id === params.id);
    return (
      <>
      { logementID ? (
        <div>
          <Header />
          <main>
            <Slideshow slides={logementID.pictures} />
            <div className="container__description">
              <div className="container__description__tiloctag">
                  <LogementTitle title={logementID.title} location={logementID.location}/>
                    <div className="container__description__tiloctag__tag">
                      <ul className="container__description__tiloctag__tag__list">
                        {logementID.tags.map((tag, t) => {
                          return (            
                          <li className="container__description__tiloctag__tag__list__elt" key={t}>
                              {tag}
                          </li>)})
                          }
                      </ul>
                    </div>
                  </div>
                <div className="container__description__hostrating">
                  <Hostprofile name={logementID.host.name} picture={logementID.host.picture}/>
                  <Rating rating={logementID.rating} />
                </div>
              </div>
            <div className="container__DE">
                <Collapse titre="Description" description={logementID.description}/>
                <Collapse titre="Équipements" description=
                  {logementID.equipments.map((eqpt,t) => {
                    return (
                    <li key={t}>{eqpt}</li> )})}/>
            </div>

          </main>
          <Footer />
        </div>
    ) : <Navigate replace to="/Error/" />
  } </>
  ) 
}

  export default Logement;