class User {
  constructor(name, age, func) {
    this.name = name;
    this.age = age;
    this.func = func;
  }

  greet() {
    console.log("hi");
  }
}

const user1 = new User(
  "harsh",
  22,
  (func = () => console.log("i am a fucntion"))
);
console.log(user1);
console.log(user1);
