"use strict";
// Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
// Any
let x = "Hello";
x = 1;
// Redeclare
let age;
age = 30;
// Array
let ids = [1, 2, 3];
let arr = [1, true, "string"];
// Tuple
let person = [1, "Brad", true];
// Array of Tuples
let staff = [
    [1, "Sissy"],
    [2, "Harj"],
    [3, "Zara"],
];
// Redeclare
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union
let product_ID;
product_ID = 22;
product_ID = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
var DirectionString;
(function (DirectionString) {
    DirectionString["Up"] = "Up";
    DirectionString["Down"] = "Down";
    DirectionString["Left"] = "Left";
    DirectionString["Right"] = "Right";
})(DirectionString || (DirectionString = {}));
console.log("ID : ", id);
console.log(Direction1.Up, Direction1.Down, Direction1.Left, Direction1.Right);
console.log(Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right);
console.log(DirectionString.Up, DirectionString.Down, DirectionString.Left, DirectionString.Right);
// Objects
const user = {
    id: 1,
    name: "John",
};
// Object with Type
const users = {
    id: 1,
    name: "Traversy",
};
// Type Assertion
let cid = 1;
let customerID = cid;
let customerIDSecondWay = cid;
cid = true;
// customerID = true; // Asserted with type number, so can't be boolean
// customerIDSecondWay = true; // Asserted with type number, so can't be boolean
// Functions
// Return Function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 3));
// Void Function
function log(message) {
    console.log(message);
}
log("Hi, my name is Ezra");
;
// Object with Type Interface
const usersInterface = {
    id: 1,
    name: "Traversy",
};
const p1 = 1;
const user2 = {
    id: 3,
    name: "Cella"
};
user2.id = 100;
const user3 = {
    id: 10,
    name: "Tanner"
};
const add = (x, y) => x + y;
// const addTwo: MathFunc = (x: string, y: number): number => x + y // This won't work because it doesn't follow the interface
const sub = (x, y) => x - y;
;
// Classes
class Person {
    constructor(idParameter, nameParameter) {
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
    constructor(idParam, nameParam, positionParam) {
        super(idParam, nameParam);
        this.position = positionParam;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.name);
console.log(emp.register());
// Generics - Reusable Components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Brad", "John", "Jill"]);
