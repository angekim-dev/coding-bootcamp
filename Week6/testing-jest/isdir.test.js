const { isdir } = require("./isdir");

test("isdir returns type of object when passed a path to a directory", (done) => {
    //because asynchronous and callback
    isdir(__dirname, (err, data) => {
        //inside where callback is happening
        expect(data).toBe("object");
        done();
    });
});
