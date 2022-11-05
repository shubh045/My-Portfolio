import "./App.css";
import Navbar from "./components/Layout/Nav/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
};

export default App;
