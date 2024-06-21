//Enum -- An enumeration is a type that represents the named constants & often referred to as an enum 
//If the meaning of the constant value is not apperant , it can make our code easier  to understand.
//Ts provides two types enum numeric and string based both.
//Numeric enum - Numeric enums are the default enum in ts . They are auto-incremented , strating from 0.
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
var dir = Direction.up;
console.log(dir);
var dir1 = Direction.down;
console.log(dir1);
//we can also specify the first value and rest of the valueauto incremented then ---
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Dir = Direction1.Down;
console.log(Dir);
//String enums - allows us to assign the string values to enum members .
var Direction2;
(function (Direction2) {
    Direction2["FirstName"] = "Sachin";
    Direction2["LastName"] = "Gupta";
})(Direction2 || (Direction2 = {}));
var d = Direction2.FirstName;
console.log(d);
//Hetrogenious enums -- we can mix the numeric and string values .
var Direction3;
(function (Direction3) {
    Direction3["firstName"] = "Sachin";
    Direction3["lastName"] = "Gupta";
    Direction3[Direction3["Age"] = 23] = "Age";
})(Direction3 || (Direction3 = {}));
var d1 = Direction3.firstName;
console.log(d1);
var d2 = Direction3.Age;
console.log(d2);
//Enum member can be used as type.
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function move(dir) {
    console.log("Moving ".concat(dir));
}
move(Direction.Up);
move(Direction.Down); // Valid
// move("UP");        // Error: Argument of type '"UP"' is not assignable to parameter of type 'Direction'.
//I am goinf to take one example here --- of weekdays n ame
var days;
(function (days) {
    days[days["SUN"] = 0] = "SUN";
    days[days["MON"] = 1] = "MON";
    days[days["TUE"] = 2] = "TUE";
    days[days["WEN"] = 3] = "WEN";
    days[days["THU"] = 4] = "THU";
    days[days["FRI"] = 5] = "FRI";
    days["SAT"] = "Sachin";
})(days || (days = {}));
//If we try to access like this then it will give index basixcally coz by default if we do not assign 
//value then it will start from 0 itself.
console.log(days.SAT);
//we can access in both ways---
var day = days.SAT;
console.log(day);
