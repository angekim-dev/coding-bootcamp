const { dbl } = require("./dbl");

test("dbl resolves the argument times two if passed a number", () => {
    return dbl(2).then((n) => {
        //don't forget to return!! otherwise false positive
        expect(n).toBe(4);
    });
});

test("dbl returns rejected promise if NaN is passed", () => {
    return dbl(NaN).catch((err) => {
        expect(err).toBe("bad number");
    });
});
