const reverseString = require("./reverseString");

test("Reverses a string.", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Reverses a string.", () => {
  expect(reverseString("i eat carrots")).toBe("storrac tae i");
});
