var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA"
};

var b = {};

for (var reverse in a) {
    b[a[reverse]] = reverse;
}

console.log(b);
