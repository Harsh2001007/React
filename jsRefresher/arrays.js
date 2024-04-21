const arrayOne = ["cooking", "football", "coding"];

const changeArr = arrayOne.map((item) => item + "!");
console.log(changeArr);

const indexOf = arrayOne.findIndex((item) => item === "football");
console.log(indexOf);

function transformToObjects(numberArray) {
  const objArr = numberArray.map((item) => ({ val: item }));
  console.log(objArr);
}

transformToObjects([1, 2, 3]);
