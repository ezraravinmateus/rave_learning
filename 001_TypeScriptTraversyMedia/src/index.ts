// Basic Types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;

// Any
let x: any = "Hello";
x = 1;

// Redeclare
let age: number;
age = 30;

// Array
let ids: number[] = [1, 2, 3];
let arr: any[] = [1, true, "string"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];

// Array of Tuples
let staff: [number, string][] = [
  [1, "Sissy"],
  [2, "Harj"],
  [3, "Zara"],
];

// Redeclare
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
let product_ID: string | number;
product_ID = 22;
product_ID = "22";

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}
enum DirectionString {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log("ID : ", id);
console.log(Direction1.Up, Direction1.Down, Direction1.Left, Direction1.Right);
console.log(Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right);
console.log(
  DirectionString.Up,
  DirectionString.Down,
  DirectionString.Left,
  DirectionString.Right,
);

// Objects
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};

// Type (Flexible, unlike interface)
type User = {
  id: number;
  name: string;
};

// Object with Type
const users: User = {
  id: 1,
  name: "Traversy",
};

// Type Assertion
let cid: any = 1;
let customerID = <number>cid;
let customerIDSecondWay = cid as number;

cid = true;
// customerID = true; // Asserted with type number, so can't be boolean
// customerIDSecondWay = true; // Asserted with type number, so can't be boolean

// Functions
// Return Function
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 3));

// Void Function
function log(message: string | number): void {
  console.log(message);
}

log("Hi, my name is Ezra");

// Interfaces (Only describing the shape of an object)
interface UserInterface {
  id: number;
  name: string;
}

// Object with Type Interface
const usersInterface: UserInterface = {
  id: 1,
  name: "Traversy",
};

// Type vs Interface (Types can be used with primitive or union)
type Point = number | string;
const p1: Point = 1;
// Interface cannot be used with primitive or union.
// interface PointInterface = number;
// interface PointInterfaceTwo = number | string;

// Optional Property Interface
interface UserOptionInterface {
  id: number;
  name: string;
  age?: number;
}
const user2: UserOptionInterface = {
  id: 3,
  name: "Cella",
};
user2.id = 100;

// Read Only Property Interface
interface UserReadOnlyInterface {
  readonly id: number;
  name: string;
}

const user3: UserReadOnlyInterface = {
  id: 10,
  name: "Tanner",
};
// user3.id = 100 // This will return error because user3 has interface with id property read-only.

// Interface Function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
// const addTwo: MathFunc = (x: string, y: number): number => x + y // This won't work because it doesn't follow the interface
const sub: MathFunc = (x: number, y: number): number => x - y;

// Interface within a class
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  // Access Modifier / Data Modifier
  // private id: number // if property is private, can only access within class
  // public id: number // property is public by default
  id: number; // Only accessible by its inheritance / subclass
  name: string;

  constructor(idParameter: number, nameParameter: string) {
    this.id = idParameter;
    this.name = nameParameter;
  }
  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");

console.log(brad.register());

class Employee extends Person {
  position: string;

  constructor(idParam: number, nameParam: string, positionParam: string) {
    super(idParam, nameParam);
    this.position = positionParam;
  }
}

const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.name);
console.log(emp.register());

// Generics - Reusable Components
function getArray(items: any[]): any {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Brad", "John", "Jill"]);

numArray.push("Hello");

// Implement Generics for Array of Type Function
function getArrayTyped<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArrayTyped = getArrayTyped([1, 2, 3, 4]);
let strArrayTyped = getArrayTyped(["Brad", "John", "Jill"]);

// numArrayTyped.push("Hi"); // This will return an error because the array is Typed
numArrayTyped.push(11);
