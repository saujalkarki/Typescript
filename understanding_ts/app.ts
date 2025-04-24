console.log("Hello world");
console.log("Hey Ts!");

function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 4;
const number2 = 3;

const added = add(number1, number2);
console.log(added);

// 1. Type assignment and   Type inference
let name1 = "Saujal";
// name1 = 1; //not allowed in ts as name1 is already declerad as string
console.log(name1);

var postition = 1;
// postition = "One";
console.log(postition);

// 2.Type Object
const obj1: {
  name: string;
  age: number;
} = {
  name: "saujal",
  age: 21,
};
console.log(obj1);
obj1.name = "Nischal";
console.log(obj1.name);
// console.log(obj1.isMarried);

// 3. Type array
const arr1: [string, string, number] = ["saujal", "nischal", 2];
console.log(arr1);
arr1.push("1");
console.log(arr1);
const arr2: string[] = ["ab", "cd", "ef"];
console.log(arr2);
const arr3: number[] = [1, 3, 4];
console.log(arr3);

// 4. Type Enum

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "abc",
  age: 21,
  hobbies: ["dev", "Fe", "Be"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("Is Admin");
}

enum CardinalDirections {
  North = "A",
  East = "B",
  South = "C",
  West = "D",
}
let currentDirection = CardinalDirections.North;

console.log(currentDirection);
console.log(CardinalDirections.East);
console.log(CardinalDirections.South);
console.log(CardinalDirections.West);

// TYPE Any
let ab: any = true;
console.log(ab);
ab = "Saujal";
console.log(ab);

// The Union type
function combine(inp1: number | string, inp2: number | string) {
  let result;
  if (typeof inp1 === "number" && typeof inp2 === "number") {
    result = inp1 + inp2;
  }
  if (typeof inp1 === "string" && typeof inp2 === "string") {
    result = inp1.toString() + inp2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Ram", "Sita");
console.log(combinedNames);

// The Literal type
function smth(a1: number, a2: number, role: "Admin") {
  return a1 + a2;
}
console.log(smth(20, 3, "Admin"));

// Type Alias
type Combinable = number | string;
function combine1(inp1: Combinable, inp2: Combinable) {
  let result;
  if (typeof inp1 === "number" && typeof inp2 === "number") {
    result = inp1 + inp2;
  }
  if (typeof inp1 === "string" && typeof inp2 === "string") {
    result = inp1.toString() + inp2.toString();
  }

  return result;
}

console.log(combine(1, 2));
console.log(combine("One", "Two"));

// Function return Types
function sum(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(sum(20, 60));
const sumResult = sum(20, 20);

// Function as Types
// let try1: Function;
let try1: (a: number, b: number) => number;
// try1 = sumResult; // not allowed
try1 = sum;
console.log(try1(100, 150));

// Function types and callbacks
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 90, (rslt) => {
  console.log(rslt);
});

// Type unknown
let userInput: unknown;
userInput = 4;
console.log(userInput);
console.log(typeof userInput);
userInput = "Saujal";
console.log(userInput);
console.log(typeof userInput);

// Type never
