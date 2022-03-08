const analysis = require("../code/analysis");

test("analysis test one", () => {
    expect(analysis([2, 5, 6, 8, 9])).toEqual({
        average: 6,
        min: 2,
        max: 9,
        length: 5,
    });
});

test("analysis test two", () => {
    expect(analysis([1, 1, 9, 1, 1])).toEqual({
        average: 13 / 5,
        min: 1,
        max: 9,
        length: 5,
    });
});

test("analysis test three", () => {
    expect(analysis([7, 8, 9])).toEqual({
        average: 8,
        min: 7,
        max: 9,
        length: 3,
    });
});