

const getGreeting = (isMorning) => {
  return isMorning ? "good Morning": "good Evening";
}

const result = getGreeting(true);
console.log(result);