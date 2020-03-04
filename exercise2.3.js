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
(numbersGame(2);