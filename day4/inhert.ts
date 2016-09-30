// class Car {
//   public report(){
//     console.log(`Year: ${this.year}`);
//     console.log(`Year: ${this.make}`);
//     console.log(`Year: ${this.model}`);
//   }
//   constructor(public year:number, make:string, model:string){
//
//   }
//
// }
//
// class truck {
//   public report(){
//     console.log(`Year: ${this.year}`);
//     console.log(`Year: ${this.make}`);
//     console.log(`Year: ${this.model}`);
//     console.log(`Towing Capacity: ${this.towingCapacity}`)
//   }
//   constructor(year:number, make:string, public model:string, public towingCapacity:number){
//
//   }
// }
//
// let myCar = new Car(2015, "Toyota", "Camry");
// let myTruck = new Truck(2016, "Dodge", "Ram", 5000);

// inheritance

// abstract class Vehicle {
//   public report(){
//     console.log(`Year: ${this.year}`);
//     console.log(`make: ${this.make}`);
//     console.log(`model: ${this.model}`);
//     // console.log(`model: ${this.towingCapacity}`);
//   }
//
//   constructor(public year:number, public make:string, public model:string){
//  //
//  }
// }
//
// class Car extends Vehicle{
//   constructor(year:number, make:string, model:string){
//     super(year, make, model);
//   }
// }
//
// class Truck extends Vehicle{
//   public report(){
//     super.report();
//     console.log(`Towing Capacity: ${this.towingCapacity}`);
//   }
//   constructor(year:number, make:string, model:string, public towingCapacity:string){
//     super(year, make, model);
//   }
// }
//
// let myCar = new Car(2015, "Toyota", "Camery");
// let myTruck = new Truck(2015, "Truck", "thistruck", "bacon");


class Hamburger  {
    price:number
    name:string
    getPrice(){
        return this.price;
    }
    constructor(){
        this.name = "hamburger";
        this.price = 2;
    }

}

class Cheeseburger extends Hamburger {
    cheese:number;
    getPrice(){
      return super.getPrice() + this.cheese;
    }

    constructor(){
        super();
        this.name = "Cheeseburger";
        this.cheese = 1;
    }
}
