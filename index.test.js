
const service = require('./coreLanguageService');

describe('devguff-nodejs-language-core', () => {
  describe("printHelloWorld", () => {
    it("should print 'Hello, world!' to the console", () => {
      const consoleLogMock = jest.fn();
      console.log = consoleLogMock;
      service.printHelloWorld();
      expect(consoleLogMock).toHaveBeenCalledWith("Hello, world!");
    });
  });
  describe("printAllDataTypes", () => {
    it("should use all 8 data types in Node.js", () => {
      const consoleLogMock = jest.fn();
      console.log = consoleLogMock;
      service.printAllDataTypes();
      expect(consoleLogMock).toHaveBeenCalledWith(
        42,
        "Hello, world!",
        true,
        undefined,
        null,
        { foo: "bar" },
        expect.any(Symbol),
        BigInt(9007199254740991)
      );
    });
  });
  describe("conditional", () => {
    it("get greeting should return 'good Morning'", () => {
      expect(service.getGreeting(true)).toBe("good Morning");
    });
    it("get greeting should return 'good Evening'", () => {
      expect(service.getGreeting(false)).toBe("good Evening");
    });
  });
  describe("printLoop", () => {
    it("should print numbers 1 through 10 to the console", () => {
      const consoleLogMock = jest.fn();
      console.log = consoleLogMock;
      service.printLoop();
      for (let i = 1; i <= 10; i++) {
        expect(consoleLogMock).nthCalledWith(i, i);
      }
    });
  });
})

