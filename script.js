const convertBtn = document.getElementById("convert-btn");

function converters(num) {
  const romanConvert = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  let accumulator = "";
  for (const key in romanConvert) {
    const numberValue = romanConvert[key];
    while (numberValue <= num) {
      num -= numberValue;
      accumulator += key;
    }
  }
  return accumulator;
}

function myFunction() {
  const input = document.getElementById("number");
  let result = converters(input.value);
  let container = document.getElementById("output-container");
  let output = document.getElementById("output");
  if (input.value === "") {
    container.classList.add("warning");
    output.innerText = "Please enter a valid number";
  } else if (input.value <= 0) {
    container.classList.add("warning");
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (input.value >= 4000) {
    container.classList.add("warning");
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    container.classList.add("result");
    output.innerText = `${result}`;
  }
}
