/**
 * Here we are going to see about variables
 *  
 * There are three ways to decalre or use variables
 * Var, Let and Const

 */

/* 
statmets are a unit of action mostly it ends with semicolen. 
Semicolon are optional in JS

Code blocks are enclosed bu curly bracket with zero or more statments. Eg) Function declaration, if code block
Code blocks may contain lables. 
*/


var name = "Hari"; // Function scoped
let age = 22; // Block scoped, from ES6
const role = "developer"; // constant variable, Block scoped, from ES6


/*
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter
Names can also begin with $ and _ (but we will not use it in this tutorial)
Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names
*/


/*
assignment: throwing away the old value of a variable and replacing it with a new one

initialization: it's a special kind of assignment: the first. 
Before initialization objects have null value and primitive types have default values such as 0 or false. 
Can be done in conjunction with declaration.

declaration: a declaration states the type of a variable, along with its name.
A variable can be declared only once. 
It is used by the compiler to help programmers avoid mistakes such as assigning string values to integer variables. 
Before reading or assigning a variable, that variable must have been declared.

 */

console.log(ab); //gives undefined
var ab = 10;

console.log(bc);// throws error
let bc = 20;

role = 20; // throws error aswe are changing constant.

const bad ; // we cannot do that it generates error
bad = 50;