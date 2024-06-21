//Syntax for variab le decalration --
/*  ---       let variable_name:type = value;   ----         */
var v = "Sachin Gupta";
console.log(v);
//any type - any type in js is a special type , that we can use whenever we dont want a particular 
//value to cause typechecking errors . whenever the value is of any type then we can access the value 
//alll the properties of any type;
var hero;
function getDetails() {
    return 'Sachin';
}
hero = getDetails();
//Tuple -- tuple is a special type of array in ts that allow us to define the array with the fixed number
//of elements where each element can have a specific type.
//This is useful when we want to represent a collection of values with a known length & specific types for each position.
var tup;
tup = [1, "Sachin"];
console.log(tup);
console.log(typeof (tup));
//Imporatant point is that we can not assign the different value to different type but we can change the 
//value or reassign the value.
//tup[0] = "sachin";-- we can not do this coz we know ts is static type lg and we can not assign the string to number .
//Although we can change or reassign the value --
tup[0] = 3;
tup[1] = "Sachin Gupta";
console.log(tup);
//Also we can give like that -- If we right ? at the end we can define the optional element as well .
var tuple;
tuple = [10]; // Correct
tuple = [10, "hello"]; //correct
//But , this not correct because only string is optional there ---
//tuple =["hello"];  -- Incorrect 
//We can access in this way as well ---
var firstElement = tuple[0];
//let SecondElement: string = tuple[1];
console.log(firstElement);
//Tuples with rest Parameter -----------------
//Using rest parameter we can assign the multiple elements to the type of tuple ...
//One important thing is that rest elements type should be an array .
var tuple1;
tuple1 = [1, "Hello", "World", "Sachin Gupta"];
console.log(tuple1);
//But but , If we will try to skip number and assigning only string array element it is going to wrong .
//tuple1 = ["Hello","Sachin"] -- Here 2nd parameter is correct coz we are storing inside the string but 
// first one is wrong , coz string can not assign to number .
//Tuple can be used with functions as well when we need to return multiple values as well.
function getUser() {
    return [1, "Sachin"];
}
var user = getUser();
console.log(user);
//If we define the tuple like that --
//let tuple22: [id: number, name?: string, active: boolean]; give error 
//coz required element can not follow the an optional element , it should come before the optional element.
var tuple2;
tuple2 = [1, "Alice"]; // Correct
tuple2 = [2, "Bob", true]; // Correct
function createUser(id, name, isActive) {
    return [id, name, isActive];
}
var User = createUser(1, "Sachin Gupta", true);
console.log(User);
