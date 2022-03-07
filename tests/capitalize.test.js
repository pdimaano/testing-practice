const capitalize = require("../code/capitalize");

test("capitalize test one", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("capitalize test two", () => {
    expect(capitalize("nevermind")).toBe("Nevermind");
});

test("capitalize test three", () => {
    expect(capitalize("jukebox The Ghost")).toBe(
        "Jukebox The Ghost"
    );
});