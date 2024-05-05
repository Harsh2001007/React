import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../dataExamples";
import Section from "./Section";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function eventhandler(params) {
    setSelectedTopic(params);
    console.log(selectedTopic);
  }
  return (
    <Section id="examples">
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          method={() => {
            eventhandler("components");
          }}
        >
          Components
        </TabButton>
        <TabButton
          method={() => {
            eventhandler("jsx");
          }}
          isSelected={selectedTopic === "jsx"}
        >
          JSX
        </TabButton>
        <TabButton
          method={() => {
            eventhandler("props");
          }}
          isSelected={selectedTopic === "props"}
        >
          Props
        </TabButton>
        <TabButton
          method={() => {
            eventhandler("state");
          }}
          isSelected={selectedTopic === "state"}
        >
          State
        </TabButton>
      </menu>
      {!selectedTopic ? (
        <p>Please select a topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
