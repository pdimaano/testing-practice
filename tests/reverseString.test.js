const reverseString = require("../code/reverseString");

test("reverse test one", () => {
    expect(reverseString("HJK")).toBe("KJH");
});

test("reverse test two", () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test("reverse test three", () => {
    expect(reverseString("My life for Aiur")).toBe("ruiA rof efil yM");
});