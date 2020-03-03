for (var i = 10; i > 0; i--) {
    console.log(i);
}

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA"
};

var b = {};

for (var reverse in a) {
    console.log(a[reverse], reverse);
}
