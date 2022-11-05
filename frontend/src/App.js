import "./App.css";
import Navbar from "./components/Layout/Nav/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Skills />
      <Experience />
    </>
  );
};

export default App;
