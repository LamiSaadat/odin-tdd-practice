const analyzeArray = require("./analyzeArray");

test("An array of normal numbers", () => {
  expect(analyzeArray([50, 60, 20, 10, 40])).toStrictEqual({
    average: 36,
    min: 10,
    max: 60,
    length: 5,
  });
});

test("An array with non-numbers", () => {
  expect(analyzeArray([50, 60, 20, 10, "40"])).toBe("Not an array");
});

test("An array like object (string)", () => {
  expect(analyzeArray("12345")).toBe("Not an array");
});
