// var ryan = {
//   firstName: "Ryan",
//   lastName: "Walsh",
//   fullName: fullName
// };

// function fullName(){
//   console.log(this.firstName + " " + this.lastName);
// }

// ryan.fullName();

// var ryan = {
//   firstName: "Ryan",
//   lastName: "Walsh",
//   fullName: fullName
// };

// var matt = {
//   firstName: "Matt",
//   lastName: "Walsh",
//   fullName: fullName
// };

// function fullName(){
//   console.log(this.firstName + " " + this.lastName);
// }

// // fullName.call(ryan);

// function greet(greeting){
//   console.log(greeting + this.firstName + " " + this.lastName);
// }

// greet.call(ryan, "Hello Mr. ");


/*
------------
Next example
------------
*/

// var civic = {
//   year: 2016,
//   speed: 0,
//   color: "White"
// };

// var tesla = {
//   year: 2016,
//   speed: 0,
//   color: "Black"
// };

// function changeSpeed(speed){
//   this.speed = speed;
// }

// function changeColor(color){
//   this.color = color;
// }

// changeColor.call(civic, "Green");
// changeSpeed.call(tesla, 80);

// console.log(civic);
// console.log(tesla);

/*
------------
Next example
------------
*/

// function generic(x,y,z){
//   return this.multiply(x,y,z);
// }

// var math ={
//   multiply: function(x,y,z){
//     return x * y * z;
//   }
// };

// console.log(generic.call(math, 4, 9, 10, 11)); // returns 360

// console.log(generic.apply(math, [4, 9, 10, 11])); // using apply instead of call

// var sumoMan = {
//   name: "Sumo Man",
//   weapon: "Belly",
//   health: 100
// };

// var beardGirl = {
//   name: "Beard Girl",
//   weapon: "Beard",
//   health: 100
// };

// function changeHealth(x, y, z){
//   this.health += x + y + z;
//   console.log("WOW!", this.name + " Health = " + this.health);
// }

// var myArr = [1, 2, 3];

// changeHealth.apply(sumoMan, [-10, 15, -20]);

// changeHealth.apply(sumoMan, myArr);

/*
------------
Next example
------------
*/

// function Person(firstName, lastName, job) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.job = job;
//   this.fullName = this.firstName + " " + this.lastName;
//   this.logFullName = function() {
//     console.log(this.fullName);
//   };
// }

// var matt = new Person("Matt", "Hopkins", "Student Success");
// console.log(matt);
// matt.logFullName();

// var ryan = new Person("Ryan", "Walsh", "Lead Instructor");
// ryan.logFullName();

/*
------------
Next example
------------
*/

// Array.prototype.sum = function() {
//   var sum = 0;
//   console.log('this: ' + this);
//   for(var i = 0; i < this.length; i++){
//     if(typeof this[i] !== "number"){
//       throw new TypeError("YOU BROKE IT");
//     }
//     sum += this[i];
//   }
//   return sum;
// };

// // var arrOne = [1, 2, 3, "asd", 4, 5];
// // console.log('Sum = ' + arrOne.sum()); //YOU BROKE IT

// var arrTwo = [20, 10, 0, -10];
// console.log('Sum = ' + arrTwo.sum()); // Sum = 20

/*
------------
Next example
------------
*/

// function Car(year, model){
//   this.year = year;
//   this.model = model;
//   this.speed = 0;
// }

// var civic = new Car(2016, "civic");

// Car.prototype.move = function(newSpeed){
//   this.speed = newSpeed;
// };

// civic.move(25);
// console.log(civic);

// var car = {
//   name: function(newName){
//     this.name = newName;
//   },
//   move: function(newSpeed) {
//     this.speed = newSpeed;
//   },
//   drivetrain: function(newDriveTrain){
//     this.driveTrain = newDriveTrain;
//   }
// };
//
// var civic = Object.create(car, { name: "civic", speed: 0, driveTrain: "true"});
//
// console.log(civic);

// default: window

// implicit: left of the dot (whatever your using the this keyword on)
var personeOne = {
  name: "Ryan",
  logName: function() {
    console.log(this.name);
  }
};

personeOne.logName();

// explicit: whatevers left after the dot

var personTwo = {
  name: "zach"
};

function logName() {
  console.log(this.name);
}

logName.call(personTwo);
logName.apply(personTwo);
var logPersonTwo = logName.bind(personTwo);
logPersonTwo();

//default
// console.log(this); //probably a mistake;

// new
function PersonThree(name){
  this.name = name;
  this.logName = function(){
    console.log(this.name);
  };
}

var personThree = new PersonThree("Joseph");

//implicit
personThree.logName();

// what does new reference to: the object being created
