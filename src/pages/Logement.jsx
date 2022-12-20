import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logements from '../ressources/logements.json'
import Footer from "../components/Footer";
import Header from "../components/Header";
import CollapseApp from "../components/Collapseapp";
import "../style/components/_logement.scss"
import LogementTitle from "../components/LogementTitle";
import Hostprofile from "../components/Hostprofile";
import Rating from "../components/Rating";
import Slideshow from "../components/Slideshow";


function Logement() {
  const [logementData, setLogementData] = useState([])
  const params = useParams();
 

  useEffect(() => {
    console.log(logements)
    setLogementData(logements)
  }, [])

  const logementID = logementData.find(x => x.id === params.id);
    if (logementID) {
    return (
        <div>
          <Header />
          <main>
            <Slideshow slides={logementID.pictures} />
            <div className="container__description">
              <div className="container__description__tiloctag">
                  <LogementTitle title={logementID.title} location={logementID.location}/>
                    <div className="container__description__tiloctag__tag">
                      <ul className="container__description__tiloctag__tag__list">
                        {logementID.tags.map(tag =>             
                          <li className="container__description__tiloctag__tag__list__elt">
                              {tag}
                          </li>)}
                      </ul>
                    </div>
                  </div>
                <div className="container__description__hostrating">
                  <Hostprofile name={logementID.host.name} picture={logementID.host.picture}/>
                  <Rating rating={logementID.rating} />
                </div>
              </div>

            <div className="container__DE">
                <CollapseApp titre="Description" description={logementID.description}/>
                <CollapseApp titre="Équipements" description=
                  {logementID.equipments.map(eqpt =>
                    <li>{eqpt}</li> )}/>
            </div>

          </main>
          <Footer />
        </div>
      );
    } else {
      return <div>Logement not found</div>
    }

  }
  
  export default Logement;