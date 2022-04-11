import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import Aboutme from "./components/Aboutme";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import testimonials from "./components/Testimonials";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";



function App() {
  return (
    <>
  <Particles
    className="particles-canvas"
    params={{
      particles: {
        number:{
          value: 30,
          density:{
            enable: true,
            value_area: 900
          }
        },
        shape:{
          type:"circle",
          stroke: {
            width:6,
            color:"#f9ab00"
          }
        },
        size: {
            random: true,
            value: 5,
        },
        opacity: {
            value: 0.5,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 6,
            straight: false,
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
        

      }
    }}
          
  />
  <Navbar />
  <Header />
  <Aboutme/>
  <Services/>
  <Experience/>
  <Portfolio />
  <Testimonials/>
  <Contacts/>
  <Footer/>
 

  </>
  );
}

export default App;
