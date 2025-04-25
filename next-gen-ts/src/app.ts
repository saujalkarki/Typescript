const userName = "Saujal";
// userName = "Nischal";

let age = 30;
age = 29;

const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(2, 5));

// default parameters in ts
function sum(a: number, b: number = 1) {
  return a + b;
}

console.log(sum(10));

// spread operator in ts
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
console.log(activeHobbies);
activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = { ...person, isMarried: true };

console.log(copiedPerson);

// Rest operator in ts
const add1 = (...number: number[]) => {
  console.log(number);
  return number.reduce((curRslt, curVal) => {
    console.log(curRslt);
    console.log(curVal);
    return curRslt + curVal;
  }, 0);
};

const addedNumbers = add1(2, 6, 4, 8, 6);
console.log(add1(2, 6, 4, 8, 6));

// Array and Object destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby1);
console.log(hobby1);
console.log(remainingHobbies);
console.log(hobbies);

const { name: firstName, age: personAge } = person;

console.log(firstName);
console.log(personAge);
