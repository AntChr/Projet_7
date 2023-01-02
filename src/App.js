import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Error from "./pages/Error";
import Logement from "./pages/Logement";

// Création des différentes routes du site

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Accueil/>}/>
            <Route path="/logement/:id" element={<Logement/>}/>
            <Route path="/apropos" element={<Apropos/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default App

