function logType(arg) {
    if (typeof arg === null) {
        console.log("null!");
    } else if (typeof arg == "string") {
        console.log("string!");
    } else if (typeof arg == "undefined") {
        console.log("undefined!");
    } else if (Array.isArray(arg) == true) {
        console.log("array!");
    } else if (typeof arg == "object") {
        console.log("object!");
    } else if (typeof arg == "boolean") {
        console.log("boolean!");
    } else if (isNaN(arg) == true) {
        console.log("not a number!");
    } else if (typeof arg == "number") {
        console.log("number!");
    } else if (typeof arg == "bigint") {
        console.log("bigint!");
    } else if (typeof arg == "function") {
        console.log("function!");
    } else {
        console.log("I have no idea!");
    }
}

logType();
