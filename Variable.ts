
//Syntax for variab le decalration --

/*  ---       let variable_name:type = value;   ----         */

let v:string = "Sachin Gupta";
console.log(v);

//any type - any type in js is a special type , that we can use whenever we dont want a particular 
//value to cause typechecking errors . whenever the value is of any type then we can access the value 
//alll the properties of any type;

let hero;

function getDetails(){
    return 'Sachin';
}
hero = getDetails();

//Tuple -- tuple is a special type of array in ts that allow us to define the array with the fixed number
//of elements where each element can have a specific type.
//This is useful when we want to represent a collection of values with a known length & specific types for each position.

let tup:[number,string];
tup = [1,"Sachin"];
console.log(tup);
console.log(typeof(tup));
