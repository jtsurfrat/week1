console.log("hi");
var Hamer = (function () {
    function Hamer(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    return Hamer;
}());
var Computer = (function () {
    function Computer(name, operatingSystem) {
        this.name = name;
        this.operatingSystem = operatingSystem;
    }
    return Computer;
}());
var Hamster = (function () {
    function Hamster(name, age) {
        this.name = name;
        this.age = age;
    }
    return Hamster;
}());
function printName(product) {
    console.log(product.name);
}
var myHammer = new Hamer("Sledge Hammer", 22);
printName(myHammer);
var myComputer = new Computer("Macbook Pro", "Yos");
printName(myComputer);
var hammy = new Hamster("Hammy", 2);
printName(hammy);
var testName = "this is a test";
var FirstNamespace;
(function (FirstNamespace) {
    FirstNamespace.test = "hellow";
    function doSomething2() {
        console.log(FirstNamespace.test);
        console.log(this);
        console.log("I was declared first");
    }
    FirstNamespace.doSomething2 = doSomething2;
    doSomething2();
})(FirstNamespace || (FirstNamespace = {}));
var SecondNamespace;
(function (SecondNamespace) {
    function doSomething() {
        console.log("I was declared first");
    }
    FirstNamespace.doSomething2();
})(SecondNamespace || (SecondNamespace = {}));
var Utitites;
(function (Utitites) {
    var Utitites1 = (function () {
        function Utitites1() {
        }
        return Utitites1;
    }());
    Utitites.Utitites1 = Utitites1;
    var Utitites2 = (function () {
        function Utitites2() {
        }
        return Utitites2;
    }());
})(Utitites || (Utitites = {}));
var Product = (function () {
    function Product(_name, _price) {
        this._name = _name;
        this._price = _price;
    }
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var product1 = new Product("milk", 2);
console.log(product1);
console.log(product1.name);
console.log(product1.price);
product1.price = 3.22;
console.log(product1.price);
