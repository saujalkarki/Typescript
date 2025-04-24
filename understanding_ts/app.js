console.log("Hello world");
console.log("Hey Ts!");
function add(n1, n2) {
  return n1 + n2;
}
var number1 = 4;
var number2 = 3;
var added = add(number1, number2);
console.log(added);
// 1. Type assignment and   Type inference
var name1 = "Saujal";
// name1 = 1; //not allowed in ts as name1 is already declerad as string
console.log(name1);
var postition = 1;
// postition = "One";
console.log(postition);
// 2.Type Object
var obj1 = {
  name: "saujal",
  age: 21,
};
console.log(obj1);
obj1.name = "Nischal";
console.log(obj1.name);
// console.log(obj1.isMarried);
// 3. Type array
var arr1 = ["saujal", "nischal", 2];
console.log(arr1);
arr1.push("1");
console.log(arr1);
var arr2 = ["ab", "cd", "ef"];
console.log(arr2);
var arr3 = [1, 3, 4];
console.log(arr3);
// 4. Type Enum
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
  Role[(Role["ADMIN"] = 0)] = "ADMIN";
  Role[(Role["READ_ONLY"] = 1)] = "READ_ONLY";
  Role[(Role["AUTHOR"] = 2)] = "AUTHOR";
})(Role || (Role = {}));
var person = {
  name: "abc",
  age: 21,
  hobbies: ["dev", "Fe", "Be"],
  role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
  console.log("Is Admin");
}
var CardinalDirections;
(function (CardinalDirections) {
  CardinalDirections["North"] = "A";
  CardinalDirections["East"] = "B";
  CardinalDirections["South"] = "C";
  CardinalDirections["West"] = "D";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
console.log(currentDirection);
console.log(CardinalDirections.East);
console.log(CardinalDirections.South);
console.log(CardinalDirections.West);
// TYPE Any
var ab = true;
console.log(ab);
ab = "Saujal";
console.log(ab);
// The Union type
function combine(inp1, inp2) {
  var result;
  if (typeof inp1 === "number" && typeof inp2 === "number") {
    result = inp1 + inp2;
  }
  if (typeof inp1 === "string" && typeof inp2 === "string") {
    result = inp1.toString() + inp2.toString();
  }
  return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine("Ram", "Sita");
console.log(combinedNames);
// The Literal type
function smth(a1, a2, role) {
  return a1 + a2;
}
console.log(smth(20, 3, "Admin"));
function combine1(inp1, inp2) {
  var result;
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
function sum(n1, n2) {
  return n1 + n2;
}
console.log(sum(20, 60));
var sumResult = sum(20, 20);
// Function as Types
// let try1: Function;
var try1;
// try1 = sumResult; // not allowed
try1 = sum;
console.log(try1(100, 150));
// Function types and callbacks
function addAndHandle(n1, n2, cb) {
  var result = n1 + n2;
  cb(result);
}
addAndHandle(10, 90, function (rslt) {
  console.log(rslt);
});
// Type unknown
var userInput;
userInput = 4;
console.log(userInput);
console.log(typeof userInput);
userInput = "Saujal";
console.log(userInput);
console.log(typeof userInput);
