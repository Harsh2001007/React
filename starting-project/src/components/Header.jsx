import mainImg from "../assets/react-core-concepts.png";

const reactDescriptions = [
  "Fundamentals",
  "Crucial",
  "Core",
  "Important",
  "Mandatory",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length)];
  return (
    <header>
      <img src={mainImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} Fundamental React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
}
