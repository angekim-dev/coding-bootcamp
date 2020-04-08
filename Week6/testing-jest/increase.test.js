const { increase } = require("./increase");

//takes two arguments, first a string that describes our testcase
//secondly it takes a callback function that contains our unit test
test('Passing NaN produces the string "ERROR"', () => {
    const result = increase(NaN); // call the function like we normally would
    expect(result).toBe("ERROR");
});

test("Passing 0 produces the string 'ERROR'", () => {
    const result = increase(0);
    expect(result).toBe("ERROR");
});

test("Passing a number smaller than 0 produces the string 'ERROR'", () => {
    expect(increase(-10)).toBe("ERROR");
});
//expect(increase(-(Math.random()*10))).toBe("ERROR");

test("passing a number greater than 0 produces a number greater than a million", () => {
    expect(increase(3)).toBeGreaterThanOrEqual(1000000);
});

test("passing a number that i greater than 1000000 produces that number", () => {
    expect(increase(2000000)).toBe(2000000);
});
