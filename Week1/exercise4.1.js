function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

Rectangle.prototype.getArea = function getArea() {
    return this.width * this.height;
};

function Square(n) {
    this.width = n;
    this.height = n;
}

Square.prototype = new Rectangle();

var rect = new Rectangle(4, 5);
console.log(rect.getArea()); //20
var square = new Square(4);
console.log(square.getArea()); //16

//Write a constructor (function of prototype) called Rectangle
//that accepts two numbers (width and height) as parameters.
//Rectangle instances (objects created with new)
//should have a method (function belonging to object) called getArea
//that returns the instance's width multiplied by its height.
//Write another constructor called Square that accepts one number
//(which will serve as both width and the height) as a parameter.
//Instances of Square should also have a getArea method
//but you should not rewrite the getArea function you wrote for Rectangle.
//Square instances should use the same getArea method
//that Rectangle instances do.
