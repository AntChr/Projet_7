import CollapseApp from "../components/Collapseapp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Bannerabout from "../components/Banner"

function Apropos() {
    return (
      <div>
        <Header />
        <main className="container__about">
        <Bannerabout /> 
        <CollapseApp />
        </main>
        <Footer />
      </div>
    )
  }
  
  export default Apropos;