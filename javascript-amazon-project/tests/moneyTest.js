import { formatCurrency } from "../scripts/utils/money.js";

console.log("test suite: formatCurrency");

console.log("converts cents into dollars");

//Basic Test Case
if (formatCurrency(2095) === "20.95") {
  console.log("Passed");
} else {
  console.log("Failed");
}

//Edge Case
if (formatCurrency(0) === "0.00") {
  console.log("Passed");
} else {
  console.log("Failed");
}

if (formatCurrency(2000.5) === "20.01") {
  console.log("Passed");
} else {
  console.log("Failed");
}
