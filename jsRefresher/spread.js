const arrOne = ["coding", "gaming", "gym"];

const arrTwo = [...arrOne, "playstation", "peace"];

console.log(arrTwo);

const obj = {
  name: "harsh",
  age: "22",
};

const udpatedObj = {
  ...obj,
  favHobby: "coding and gaming",
};

console.log(udpatedObj);
