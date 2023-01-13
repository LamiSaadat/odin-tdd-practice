const capitalize = require("./capitalize.js");

test("Capitalizes the first letter of string.", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Capitalizes the first letter of string.", () => {
  expect(capitalize("my name is Lamisa.")).toBe("My name is Lamisa.");
});
