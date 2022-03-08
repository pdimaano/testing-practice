const cipher = require("../code/cipher");

test("cipher test one", () => {
    expect(cipher("Hello World", 0)).toBe("Hello World");
});

test("cipher test two", () => {
    expect(cipher("that was incredible", 4)).toBe("xlex aew mrgvihmfpi");
});

test("cipher test three", () => {
    expect(cipher("sunday morning", 8)).toBe("acvlig uwzvqvo");
});