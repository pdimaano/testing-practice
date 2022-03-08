const calculator = require("../code/calculator");

test("calculator test one", () => {
    expect(calculator.add(10, 5)).toBe(15);
});

test("calculator test two", () => {
    expect(calculator.sub(13, 20)).toBe(-7);
});

test("calculator test three", () => {
    expect(calculator.div(49, 7)).toBe(7);
});

test("calculator test four", () => {
    expect(calculator.mul(9, 6)).toBe(54);
});