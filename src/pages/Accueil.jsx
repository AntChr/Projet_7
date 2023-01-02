import Banner from '../components/Banner'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import logements from '../ressources/logements.json'
import { Link } from 'react-router-dom'
import Box from '../components/Box'

// Page Accueil du site avec un usestate pour appeler les données qui seront utilisés par le composant Box
function Accueil() {
  const [logementData, setLogementData] = useState([])

  useEffect(() => {
    setLogementData(logements)
  }, [])
  return (
    <div>
          <Header />
          <main className='container__home'>
          <Banner />
          <div className='logement-list'>
            {logementData.map((logement,id) => (
            <div key={logement.id} className='logement-list_card'>
              <Link  to={`/logement/${logement.id}`}>
                <Box cover={logement.cover} title={logement.title}/>
                </Link>
                </div>
            ))}
        </div>
          </main>
          <Footer />
    </div>
  )
}
export default Accueil;
