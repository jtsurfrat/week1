console.log("bacon");

//closures
//closure is an expression
// variable binding and free variable

// let a = 1;
// let b = 2;
//
// function doSomething(){
//   let a = 3;
//   console.log(a + b);
// }
//
// doSomething();

// scope
// lexical scope


// dynamic scope

// let a = 1;
//
// function doSomthing(){
//   console.log(a);
// }
//
// function reallyDo(){
//   let a = 2;
//   console.log(a);
//   doSomthing();
// }

// excution context

// let a = 1;
// console.log(a);

// function reallyDoSomething(){
//   let a = 1;
//   console.log(a);
// }
//
//
// reallyDoSomething();

//Understanding closures

function createFunction(){
  let a = 1;
  return function(){
    a++;
    console.log(a)
  }
}

let doSomthing = createFunction();
console.log(createFunction());
doSomthing();



//curry functions
// are like closures

function generateTemplateEmail(customerName){
  return function(productName){
    console.log(`Dear ${customerName}, thanks you for your positive
                review of ${productName}`);
  }
}

let bobTemplateEmail  = generateTemplateEmail("Bob");
bobTemplateEmail("bacon");

let sarahTemplate = generateTemplateEmail("Sarah");
sarahTemplate("dog");
sarahTemplate("bacon");


function generateNumberTemplate(number1){
  return function(number2){
    console.log(`number1: ${number1}, + number2: ${number2} = ${number1 + number2}`);
  }
}

let plusNumber = generateNumberTemplate(5);
plusNumber(2);

let array = [false, true, true, true];
let stuff = true;
stuff.parseInt()
console.log(stuff);
for(let i = 0;i < array.length; i++){
  ++true;
  // array[i].valueOf;
  // console.log(array);
}
