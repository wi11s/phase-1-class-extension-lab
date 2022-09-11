// Your code here
class Polygon {
    constructor(array) {
        this.array = array
    }
    get countSides() {
        return this.array.length
    }
    get perimeter() {
        let sum = this.array.reduce(function(a, b){
            return a + b;
        }, 0);
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.array[0]+this.array[1]>this.array[2] && this.array[0]+this.array[2]>this.array[1] && this.array[1]+this.array[2]>this.array[0]) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.array[0]===this.array[1] && this.array[1]===this.array[2] && this.array[2]===this.array[3]) {
            return true
        } else {
            return false
        }
    }
    get area() {
        let sideSquare = this.array[0]**2
        return sideSquare
    }
}