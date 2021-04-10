let string = "test"; // type inference
let string2: string = "test"; // type annotation

let apples: number = 5; // set variable apples to type number

apples = 10; // no errors beause the type is correct

let speed: string = "fast"; // set variable speed to string

let now: Date = new Date(); // built-in objects

// Array
let colors: string[] = ["red", "green", "blue"]; // string[] means it's an array that contains strings

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  a: 10,
}; // use interface instead?

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

const json = '{"x":10,"y":20}';

// parsedJson's return type is any
const parsedJson = JSON.parse(json);

const parsedJsonWithAnnotation: { x: number; y: number } = JSON.parse(json);

parsedJsonWithAnnotation.tea; // error because it's not a property

let words = ["red", "green", "blue"];
let foundWord: boolean; // better way is to initialise it as false

words.forEach((e) => {
  if (e === "green") foundWord = true;
});
