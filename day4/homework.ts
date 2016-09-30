
//
// <p>Click the button to return the value of its value attribute.</p>
//
// <button id="myBtn" value="myvalue" onclick="myFunction()">Try it</button>
//
// <p id="demo"></p>
//
// <script>
// function myFunction() {
//     var x = document.getElementById("myBtn").value;
//     document.getElementById("demo").innerHTML = x;
// }
// </script>

// class Hamburger  {
//     price:number
//     name:string
//     getPrice(){
//         return this.price;
//     }
//     constructor(){
//         this.name = "hamburger";
//         this.price = 2;
//     }
//
// }
//
// class Cheeseburger extends Hamburger {
//     cheese:number;
//     getPrice(){
//       return super.getPrice() + this.cheese;
//     }
//
//     constructor(){
//         super();
//         this.name = "Cheeseburger";
//         this.cheese = 1;
//     }
// }

// interface IName {
//   name:string
// }
//
// class Hamer implements IName {
//
//     constructor(public name:string, public weight: number){
//     }
//   }
//
//   class Computer implements IName {
//     constructor(public name:string, public operatingSystem:string){
//
//     }
//   }
//
//   class Hamster implements IName {
//     constructor(public name:string, public age:number){
//
//     }
//   }
interface ItwoWheels {
  wheels:number;
  seat:number;
  speed:number;
}

class Bike implements ItwoWheels {
  constructor(public wheels:number, public seat:number, public speed:number){

  }
}

abstract class Vehicle {
  engine:number
  constructor(public color:string, public size:string){
    this.engine = 1;
  }
}

class Car1 extends Vehicle {

  constructor(public color:string, public engine:number, public size:string){
    super(color,size);
  }
}

class Boat extends Vehicle {

  constructor(public color:string, public engine:number, public size:string){
    super(color,size);
  }
}

let honda = new Car1("red",1,"6ft");
let boat = new Boat("black",2, "10ft")
let myBike = new Bike(2,1,50);


let para = <HTMLElement>document.getElementById("message");
let message = para.innerHTML;
console.log(message);

let inputBox = <HTMLInputElement>document.getElementById("input");
let inputValue = inputBox.value;
console.log(inputValue);

function myFun(){
  let getInfo = <HTMLInputElement>document.getElementById("saveImput");
  let inputBox2 = <HTMLInputElement>document.getElementById("input");
  let inputBox3 = inputBox2.value;
  console.log(inputBox3);

  if(inputBox3 == "car"){
    console.log(honda);
    let carColor = <HTMLInputElement>document.getElementById("empty");
    carColor.innerHTML = "color: " + honda.color + " engines: " + honda.engine + "size: "
    + honda.size;
  } else if(inputBox3 == "boat"){
    console.log(boat);
    let boatColor = <HTMLInputElement>document.getElementById("empty");
    boatColor.innerHTML = "color: " + boat.color + "engines: " + boat.engine + " size: "
    + boat.size;
  } else if(inputBox3 == "bike"){
    console.log(myBike);
    let myBike1 = <HTMLInputElement>document.getElementById("empty");
    myBike1.innerHTML = "wheels: " + myBike.wheels + " seats: "
      + myBike.seat + " MPH: " + myBike.speed;
  }
}


// make afunction get a hold of the value then console.log value
