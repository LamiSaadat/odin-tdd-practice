const calculator = require("./calculator");

test("Calculator adds", () => {
  expect(calculator.module.add(2, 2)).toBe(4);
});

test("Calculator subtracts", () => {
  expect(calculator.module.subtract(5, 3)).toBe(2);
});

test("Calculator divides", () => {
  expect(calculator.module.divide(6, 2)).toBe(3);
});

test("Calculator multiplies", () => {
  expect(calculator.module.multiply(5, 3)).toBe(15);
});
