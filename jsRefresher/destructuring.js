// arrays destructuring

const [name, age, interest, whatHeDo] = [
  "harsh",
  "22",
  "coder",
  "mobile and website",
];

console.log(
  name + " is a " + interest + " and he make website and mobile apps"
);

const {
  othername,
  otherage,
  goal: grindingFor,
} = {
  othername: "harsh",
  otherage: "22",
  goal: "make money to help all",
};

console.log(othername);
console.log(age);
console.log(grindingFor);
