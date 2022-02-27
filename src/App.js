import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-tsparticles";

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
  </>
  );
}

export default App;
