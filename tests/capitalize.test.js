import { test } from "@jest/globals";
import capitalize from "../code /capitalize";

xit("hello World", () => {
    expect(capitalize("hello")).toBe("Hello");
});

xit("capitalize Every Word", () => {
    expect(capitalize("jukebox the ghost")).toBe(
        "Jukebox The Ghost"
    );
});

xit("handle extra Spaces", () => {
    expect(capitalize("Hey     Jude")).toBe("Hey     Jude");
});