import './App.css'
import Header from "./components/header/Header.tsx";
import Home from "./components/home/Home.tsx";
import About from "./components/about/About.tsx";
import Service from "./components/service/Service.tsx";
import Portefolio from "./components/portefolio/Portefolio.tsx";
import Contact from "./components/contact/Contact.tsx";

function App() {

  return (
    <>
        <Header/>
        <Home/>
        <About/>
        <Service/>
        <Portefolio/>
        <Contact/>
    </>
  )
}

export default App
