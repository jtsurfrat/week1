console.log("bacon");
function createFunction() {
    var a = 1;
    return function () {
        a++;
        console.log(a);
    };
}
var doSomthing = createFunction();
console.log(createFunction());
doSomthing();
function generateTemplateEmail(customerName) {
    return function (productName) {
        console.log("Dear " + customerName + ", thanks you for your positive\n                review of " + productName);
    };
}
var bobTemplateEmail = generateTemplateEmail("Bob");
bobTemplateEmail("bacon");
var sarahTemplate = generateTemplateEmail("Sarah");
sarahTemplate("dog");
sarahTemplate("bacon");
function generateNumberTemplate(number1) {
    return function (number2) {
        console.log("number1: " + number1 + ", + number2: " + number2 + " = " + (number1 + number2));
    };
}
var plusNumber = generateNumberTemplate(5);
plusNumber(2);
var array = [false, true, true, true];
var stuff = true;
stuff.parseInt();
console.log(stuff);
for (var i = 0; i < array.length; i++) {
    ++true;
}
