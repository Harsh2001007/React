import Buttons from "./components/Buttons";
import Contact from "./components/Contact";
import Content from "./components/Content";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Content />
        <Buttons />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
