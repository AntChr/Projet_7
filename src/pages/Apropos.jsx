import CollapseApp from "../components/Collapseapp";
import Footer from "../components/Footer";
import Header from "../components/Header";


function Apropos() {
    return (
      <div>
        <Header />
        <main className="container__about">
          <div className="banner__about"></div>
        <CollapseApp />
        </main>
        <Footer />
      </div>
    )
  }
  
  export default Apropos;