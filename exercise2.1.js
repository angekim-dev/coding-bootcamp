function sum() {
    var fun = 0;
    for (var i = 0; i < arguments.length; i++) {
        fun += arguments[i];
    }
    return fun;
}
sum(5, 10, 15);
