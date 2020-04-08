const { find } = require("./countries");

test("When find is passed an empty string, it returns an empty array", () => {
    const result = find("");
    expect(result).toStrictEqual([]);
});

test("The search is case insensitive", () => {
    const result = find("germany");
    expect(result).toStrictEqual(["Germany"]);
});

test("If there are no matching countries, an empty array is returned", () => {
    expect(find("blubb")).toStrictEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    const result = find("A");
    expect(result.length).toBeLessThan(5);
    expect(result.length).toBeGreaterThan(0);
    console.log(find("a"));
});
