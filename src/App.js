import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";


function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Resume/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
