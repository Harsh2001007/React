import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section title={"Basic Core Concepts"} id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((items) => {
          return <CoreConcept {...items} key={items.title} />;
        })}
      </ul>
    </Section>
  );
}
