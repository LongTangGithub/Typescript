/**
 * Type Inference
 * 
 * Type inference is a feature in TypeScript that allows the compiler to "automatically"
 * determine the type of a variable based on its value
 * 
 * In other words, if you declare a varibale without explicitly specifying its type, Typescript
 * will try to infer the type based on the "value you assign" to it
 */

let tech = "Typescript";
let favNum = 8;
let tsHard = true;

console.log(typeof tech, typeof favNum, typeof tsHard);

/**
 * Error
 * tech = false
 * favNum = "Hello"
 * tsHard = 20
 */
