import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App(){
  return(
    <div className="bg-gradient-mesh min-h-screen text-white selection:bg-primary selection:text-white overflow-hidden">
      <div className="p-5 md:px-[15%] max-w-7xl mx-auto">
        <Navbar/>
        <Home/>
      </div>
      <About/>
      <div className="p-5 md:px-[15%] max-w-7xl mx-auto">
        <Experience/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  )
}