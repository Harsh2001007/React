import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import Header from "./components/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState();
  function clickHandler(event) {
    setSelected(event);
  }

  let tabContent = <p>Please select any option</p>;
  if (selected) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selected].title}</h3>
        <p>{EXAMPLES[selected].description}</p>
        <pre>
          <code>{EXAMPLES[selected].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((items) => {
              return <CoreConcepts {...items} key={items.title} />;
            })}
            {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <Examples
              isSelected={selected === "components"}
              method={() => clickHandler("components")}
            >
              Components
            </Examples>
            <Examples
              isSelected={selected === "jsx"}
              method={() => clickHandler("jsx")}
            >
              JSX
            </Examples>
            <Examples
              isSelected={selected === "props"}
              method={() => clickHandler("props")}
            >
              Props
            </Examples>
            <Examples
              isSelected={selected === "state"}
              method={() => clickHandler("state")}
            >
              State
            </Examples>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
