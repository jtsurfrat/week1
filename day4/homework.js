var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Bike = (function () {
    function Bike(wheels, seat, speed) {
        this.wheels = wheels;
        this.seat = seat;
        this.speed = speed;
    }
    return Bike;
}());
var Vehicle = (function () {
    function Vehicle(color, size) {
        this.color = color;
        this.size = size;
        this.engine = 1;
    }
    return Vehicle;
}());
var Car1 = (function (_super) {
    __extends(Car1, _super);
    function Car1(color, engine, size) {
        _super.call(this, color, size);
        this.color = color;
        this.engine = engine;
        this.size = size;
    }
    return Car1;
}(Vehicle));
var Boat = (function (_super) {
    __extends(Boat, _super);
    function Boat(color, engine, size) {
        _super.call(this, color, size);
        this.color = color;
        this.engine = engine;
        this.size = size;
    }
    return Boat;
}(Vehicle));
var honda = new Car1("red", 1, "6ft");
var boat = new Boat("black", 2, "10ft");
var myBike = new Bike(2, 1, 50);
var para = document.getElementById("message");
var message = para.innerHTML;
console.log(message);
var inputBox = document.getElementById("input");
var inputValue = inputBox.value;
console.log(inputValue);
function myFun() {
    var getInfo = document.getElementById("saveImput");
    var inputBox2 = document.getElementById("input");
    var inputBox3 = inputBox2.value;
    console.log(inputBox3);
    if (inputBox3 == "car") {
        console.log(honda);
        var carColor = document.getElementById("empty");
        carColor.innerHTML = "color: " + honda.color + " engines: " + honda.engine + "size: "
            + honda.size;
    }
    else if (inputBox3 == "boat") {
        console.log(boat);
        var boatColor = document.getElementById("empty");
        boatColor.innerHTML = "color: " + boat.color + "engines: " + boat.engine + " size: "
            + boat.size;
    }
    else if (inputBox3 == "bike") {
        console.log(myBike);
        var myBike1 = document.getElementById("empty");
        myBike1.innerHTML = "wheels: " + myBike.wheels + " seats: "
            + myBike.seat + " MPH: " + myBike.speed;
    }
}
