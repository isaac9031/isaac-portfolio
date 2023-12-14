import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {pdfjs} from 'react-pdf'
import Resume from "./components/Resume";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Resume />
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
