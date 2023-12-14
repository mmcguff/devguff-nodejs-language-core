function dataTypeDemo() {
  console.log('...📞   dataTypeDemo Called');

  //Javascscript 8 Data Types
  //see https://www.w3schools.com/js/js_datatypes.asp

  //1.  String
  let str = "Yellow";

  //2. Number:
  let num = 16; //or float values to 42.5
  //let num = 42.5

  //3. BigInt
  let bigInt = BigInt("123456789012345678901234567890");

  //4.  Booleans
  let bool = true;

  //5.  Undefined
  //When you define a variable with out a type
  //let undefinedExample = undefined;
  let undefinedExample;

  //6. null
  //a variable that is expressly defined with the vaule of nothing
  //Not the same as undefined.
  let nullExample = null;

  //7. Symbol
  //Special data type specifically to grauntee uniquness in cases where that is important
  //https://www.w3schools.com/js/js_es6.asp#mark_symbol
  const symbolExample = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let id = Symbol('id');
  symbolExample[id] = 140353;

  //8. Object Data Types
  // Basic Object:
  const obj = { firstName: "John", lastName: "Doe" };

  // Array object:
  const arr = ["Saab", "Volvo", "BMW"];

  // Date object:
  const dt = new Date("2022-03-25");

  console.log(`string:${str}`)
  console.log(`number:${num}`)
  console.log(`bigInt:${bigInt}`)
  console.log(`bool:${bool}`)
  console.log(`undefined:${undefinedExample}`)
  console.log(`null:${nullExample}`)
  console.log(`symbol:${JSON.stringify(symbolExample)}  You can't see it but its there`)
  console.log(`obj:${JSON.stringify(obj)}`)
  console.log(`arr:${arr}`)
  console.log(`date:${dt}`)
}

dataTypeDemo();