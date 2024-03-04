// shape class which has a constructor initializing 'color' and sets the 'color' value.
class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

// circle class that extends shape and renders an svg circle.
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
    }
}

// ellipse class that extends shape and renders an svg ellipse.
class Ellipse extends Shape {
    constructor() {
        super();
        this.rx = 100;
        this.ry = 50; 
    }

    setRadius(rx, ry) {
        this.rx = rx;
        this.ry = ry;
    }

    render() {
        return `<ellipse cx="50%" cy="50%" rx="${this.rx}" ry="${this.ry}" fill="${this.color}"/>`;
    }
}

// square class that extends shape and renders an svg square.
class Square extends Shape {
    render() {
        return `<rect x="50" y="50" height="100" width="200" fill="${this.color}"/>`;
    }
}

// triangle class that extends shape and renders an svg triangle.
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="50,150 250,150 150,20" fill="${this.color}"/>`;
    }
}

module.exports = { Circle, Ellipse, Square, Triangle };
