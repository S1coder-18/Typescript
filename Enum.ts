//Enum -- An enumeration is a type that represents the named constants & often referred to as an enum 
//If the meaning of the constant value is not apperant , it can make our code easier  to understand.
//Ts provides two types enum numeric and string based both.


//Numeric enum - Numeric enums are the default enum in ts . They are auto-incremented , strating from 0.
enum Direction{
    up,
    down,
    left,
    right
}

let dir:Direction = Direction.up;
console.log(dir);
let dir1:Direction=Direction.down;
console.log(dir1);

//we can also specify the first value and rest of the valueauto incremented then ---


enum Direction1{
    Up=1,//Now , this it will start from the 1 , we assigned the 1 and go through 2,3,4,......
    Down,
    Left,
    Right
}

let Dir:Direction1=Direction1.Down;
console.log(Dir);


//String enums - allows us to assign the string values to enum members .

enum Direction2{
    FirstName = "Sachin",
    LastName = "Gupta"

}

let d:Direction2=Direction2.FirstName;
console.log(d);

//Hetrogenious enums -- we can mix the numeric and string values .

enum Direction3{
    firstName = "Sachin",
    lastName ="Gupta",
    Age = 23
}

let d1:Direction3 = Direction3.firstName;
console.log(d1);
let d2:Direction3= Direction3.Age;
console.log(d2);

//Enum member can be used as type.
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }
  
  function move(dir: Direction) {
    console.log(`Moving ${dir}`);
  }
  move(Direction.Up);
  move(Direction.Down);    // Valid
  // move("UP");        // Error: Argument of type '"UP"' is not assignable to parameter of type 'Direction'.
  

  //I am goinf to take one example here --- of weekdays n ame

enum days {
    SUN,
    MON,
    TUE,
    WEN,
    THU,
    FRI,
    SAT="Sachin"
}  
//If we try to access like this then it will give index basixcally coz by default if we do not assign 
//value then it will start from 0 itself.
console.log(days.SAT);
//we can access in both ways---
let day:days = days.SAT;
console.log(day);