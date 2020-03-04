function numbersGame(n) {
    if (n <= 0) {
        return "ERROR";
    } else if (isNaN(n)) {
        return "ERROR";
    } else if (n >= 1000000) {
        return n;
    } else {
        while (n <= 1000000) {
            n = n * 10;
        }
    }
    return n;
}
numbersGame(2);

//Otherwise it should multiply the number by 10
//however many times it takes to get a number
//that is greater than or equal to 1000000 and
//return that.
