import Buttons from "./components/Buttons";
import Content from "./components/Content";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Content />
        <Buttons />
        <Skills />
        <Experience />
      </div>
    </>
  );
}

export default App;
