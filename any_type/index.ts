/**
 * Any Type
 * 
 * Typescript has a special any type that can be used to represent any type
 * When a variable is annotated with the any type, Typescript will allow
 * it to have "any value" and disable all type checking for that variable 
 * and its properties
 * 
 * While the "any type" can be useful in certain cases, it should be used sparingly.
 * Overuse of any can lead to "untyped code" and make it harder to catch type-related bugs
 * during deployment
 * 
 * It's generally better to use more specific types whenever possible to get the benefits of Typescripts 
 * type checking
 */

let color1: any = "crimson";
color1 = 20;
color1 = true;
//color1.toUpperCase();
console.log("color1");