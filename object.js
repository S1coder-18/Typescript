//Object in ts -- Basically object in ts is used to represent the non-primitive types.
//Object type is a data structure that is used to store the data or element in key-value pair.
var Student = {
    name: "Sachin",
    address: "Gomti Nagar",
    Age: 23,
};
console.log(Student);
//Here problem is that is we try to access the particular element then it will show the error , 
//name doesnt exist as object type.
//console.log(Student.name);
//To overcome from this problem we sholud write as like---
var Stu = {
    name: "Sachin",
    address: "Umaria",
    age: 23,
};
console.log(Stu.name); // Here , it will not give the error .
//We can also define the properties as optional by appending the (?) .
var Stu1 = {
    name: "Sachin Gupta",
    age: 23,
    //Address:"Umaria - MP",-------- Optional type 
};
console.log(Stu1.Address); //Because we defined as an optional .
//Readonly property -- Also , we can assign to readonly property if we dont want to modify the property .
var Stu2 = {
    name: "Sachin Gupta",
    age: 23,
    //Address:"Umaria - MP",-------- Optional type 
};
//Stu2.name = "Raj"; // cannot assign to name because readonly property assisgned to name.
Stu2.age = 24; // Here , we can do 
console.log(Stu2);
//Nested Object ----------------------
