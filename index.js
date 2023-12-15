const coreLanguageService = require("./coreLanguageService");

(() => {
  coreLanguageService.printHelloWorld();
  coreLanguageService.printAllDataTypes();
  console.log(coreLanguageService.getGreeting(true));
  coreLanguageService.printLoop();
})();