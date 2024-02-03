/**
 * The "never" keyword is used to indicate that a function will
 * "not return anything", or that a variable can never have a valu
 * 
 * The never type is useful for indicating that certain code paths should 
 * never be reached, or that certain values are impossible
 * 
 * It can help catch errors at compile time instead of runtime
 * 
 * When to use:
 */

// A function that always throws an error
function throwErr(msg: string): never{
    throw new Error(msg);
}

//  A function that has an infinite loop
function infiniteLoop(): never{
    while(true){

    }
}

// A variable that can never have a value
let randomVar: never;
function neverReturns(): never{
    while(true){

    }
}
randomVar = neverReturns();