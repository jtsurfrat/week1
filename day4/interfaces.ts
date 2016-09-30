console.log("hi");

//interfaces

interface IName {
  name:string
}

class Hamer implements IName {

    constructor(public name:string, public weight: number){
    }
  }

  class Computer implements IName {
    constructor(public name:string, public operatingSystem:string){

    }
  }

  class Hamster implements IName {
    constructor(public name:string, public age:number){

    }
  }

function printName(product:IName){
  console.log(product.name);
}

let myHammer = new Hamer("Sledge Hammer", 22);
printName(myHammer);

let myComputer = new Computer("Macbook Pro", "Yos");
printName(myComputer);



let hammy = new Hamster("Hammy" ,2);
printName(hammy);

let testName:string = "this is a test";
//printName(testName);

//name spaces

// function doSomething(){
//   console.log("I was delared first");
// }
//
// doSomething();
//
//
//
// function doSomething(){
//   console.log("I was delarded second");
// }



// (function(){
//   function doSomething(){
//     console.log("I was declared first");
//   }
//   doSomething();
// })();
//
// (function(){
//   function doSomething(){
//     console.log("I was declared second");
//   }
//   doSomething();
// })();

namespace FirstNamespace {
  export let test = "hellow";

  export function doSomething2(){
    console.log(test);
    console.log(this);
      console.log("I was declared first");
    }
    doSomething2();
}


namespace SecondNamespace {
  function doSomething(){
      console.log("I was declared first");
    }
    FirstNamespace.doSomething2();
}

namespace Utitites {
  export class Utitites1 {

  }
  class Utitites2 {

  }
}

// let myUtility = new Utitites.Utitites1();
// let myUtility = new Utitites.Utitites2();




class Product {

  get name(){
    return this._name;
  }

  get price(){
    return this._price;
  }

  set name(value){
    this._name = value;
  }

  set price(value){
    this._price = value;
  }

  constructor(private _name:string, private _price:number){

  }

}

let product1 = new Product("milk", 2);
console.log(product1);
console.log(product1.name);
console.log(product1.price);


product1.price = 3.22;

console.log(product1.price);



// product1.name = "coffee"
//
// let counter = {
//   _count:0,
//   addCount: function(){
//     console.log(this._count);
//     this._count++;
//   }
// }
//
// counter.addCount();
// counter.addCount();
//
// setInterval(counter.addCount.bind(counter), 1000);


// class Timer {
//   public totalSeconds = 0;
//   public start(){
//     setInterval( () =>{
//       this.totalSeconds++;
//       console.log(this.totalSeconds);
//     }, 1000);
//   }
// }
//
// let timer1 = new Timer();
// timer1.start();
