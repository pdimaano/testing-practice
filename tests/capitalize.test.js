const capitalize = require("../code/capitalize");

test("test one", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("test two", () => {
    expect(capitalize("nevermind")).toBe("Nevermind");
});

test("test three", () => {
    expect(capitalize("jukebox The Ghost")).toBe(
        "Jukebox The Ghost"
    );
});