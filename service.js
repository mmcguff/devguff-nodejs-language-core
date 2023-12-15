const coreLanguageService = {
  printHelloWorld: () => {
    console.log('Hello, world!');
  },
  printAllDataTypes: () => {
    const myNumber = 42;
    const myString = "Hello, world!";
    const myBoolean = true;
    const myUndefined = undefined;
    const myNull = null;
    const myObject = { foo: "bar" };
    const mySymbol = Symbol("mySymbol");
    const myBigInt = BigInt(9007199254740991);
    console.log(
      myNumber,
      myString,
      myBoolean,
      myUndefined,
      myNull,
      myObject,
      mySymbol,
      myBigInt
    );
  },
  getGreeting: (isMorning) => {
    return isMorning ? "good Morning": "good Evening";
  },
  printLoop: () => {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }
}

module.exports = coreLanguageService;