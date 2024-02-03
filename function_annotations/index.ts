/**
 * Function Parameters Annotations
 * 
 * Function parameters annotations in Typescript are used to specify the expected
 * types of parameters that a function takes
 * 
 * Typescript will give you a warning if you provide more or less arguments then you specify in your parameters area
 * numDouble(2, 10, 20);
 */

/**
 * Regular Functions
 */
function addOne(num: string){
    return num + 1;
}
const numTest = addOne("3")       
console.log(numTest)                // 31

/**
 * Arrow Functions
 */
const numDouble = (x: number, y: number) => x * y
const numDoubleTest = numDouble(2, 10)
console.log(numDoubleTest)         // 20


/**
 * Default Parameter Values
 * 
 * By default, typescript will know "person" is a string data type
 */

function greet(person = "Long!"){
    return `Hello ${person}`;
}
const greetTest = greet();
console.log(greetTest)            // Hello Long!


/***
 * Return Function Annotations for Regular Functions
 */
function double1 (x: number): number{
    return x * x; 
}
const double1Test = double1(2);
console.log(double1Test)          // 4

/***
 * Return Function Annotations for Arrow Functions
 */
const double2 = (x: number): number => x * x;
console.log(double2(2));         // 4