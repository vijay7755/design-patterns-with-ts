/* Type Annotation */

// Primitive data types
let apple: number = 5;
let speed: string = "fast";
let isValid: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built-in objects
let now: Date = new Date();

// Non Primitive data types (Objects)
// Array
const colors: string[] = ["red", "green", "blue"];
const heights: number[] = [56, 71, 82];
const truths: boolean[] = [true, false, true];

// Objects
const user: { name: string; age: number; isMarried: boolean } = {
  name: "Krishna",
  age: 28,
  isMarried: true,
};

// Functions
const myFunction: (i: number) => void = (i) => {
  console.log(i);
};
function add(a: number, b: number): number {
  return a + b;
}
const logger = (msg: string): void => {
  console.log(msg);
  // technically return type void can return both 'null' or 'undefined'
  // return null;
  return;
};
const throwError = (msg: string): never => {
  throw new Error(msg);
};

/* DIfference between Type Annotation and Type Inference */
// Type Inference: is that Typescript identifies the type of the variable for us
// If the declaration and the intialization are on the same line,
// Typescript will figure out the type of the varialble for us

let tree = "Mango"; // Typescript identified the type as string
// tree = 5  --> This will trough error
let ship; // Type is any here
ship = "Black Pearl";
ship = 5; // This will not through error asn type is defined as 'any'

/* Since we have Type Inference where we really need type annotations */
// 1. Functions that return the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
// 2. When we declare a varialble in one line and intialize tha variable in another line
const signal = ["red", "yellow", "green"];
let canGo: boolean;

signal.forEach((i: string) => {
  if (i === "green") canGo = true;
});
// 3. VAriables whose values cannot be inferred correctly
const numbers: number[] = [-10, -5, 4, 7];
let numberAboveZero: number | boolean = false;

numbers.forEach((num: number) => {
  if (num > 0) numberAboveZero = num;
});

// Destructuring with Annotation
const todaysWeather: { date: Date; weather: string; temp: string } = {
  date: new Date(),
  weather: "sunny",
  temp: "32^c",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(`It is ${weather} on ${date}`);
};

logWeather(todaysWeather);

// Annotation around objects
const profile = {
  name: "Krisha",
  age: 27,
  coords: {
    lat: 10,
    lng: 47,
  },
  setAge(age: number) {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {coords: {lat, lng}}: {coords: {lat: number; lng: number}} = profile;

/* Arrays in Typescript */
const carMakers = ['ford', 'toyota', 'tata'];  // Typescript inferred - we don't need to explicitly define string type
const dates = [new Date(), new Date()]
const bikemakers: string[] = []; // Need annotation in this case. Typescript identifies it as any.
const carModelByBrand: string[][] = [["Nexon", "Punch", "Altroz"],["Creta", "Venue", "i20"]]
const appendModel = carMakers.map((item: string): string => {
  return `${item} - some car`
})
const importantDates = [new Date(), "27-07-2023"] // Typescript inferred as (string | Date)[]
const anotherImportantDates = [new Date()] // If we define only one value we need to clearly specify type as (string | Date)[]

/* Tuples */
const drink = {
  color: "Brown",
  carbonated: true,
  sugar: 50
};

const pepsi: [string, boolean, number] = ["Brown", true, 50]; 
// or
type Drink = [string, boolean, number];
const coke: Drink  = ["Red", true, 70];
