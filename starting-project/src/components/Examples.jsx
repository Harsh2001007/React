import { useState } from "react";
import TabButton from "../components/TabButton.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
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
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selected === "components"}
          method={() => clickHandler("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selected === "jsx"}
          method={() => clickHandler("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selected === "props"}
          method={() => clickHandler("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selected === "state"}
          method={() => clickHandler("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
