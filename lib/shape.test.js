const { Circle, Ellipse, Square, Triangle } = require('./shape');

// circle shape
describe('Circle', () => {
    test('a circle is generated with matching parameters', () => {
        const shape = new Circle();
        shape.setColor('purple');
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="purple"/>`); 
    });
});

// ellipse shape
describe('Ellipse', () => {
    test('an ellipse is generated with matching parameters', () => {
        const shape = new Ellipse();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<ellipse cx="50%" cy="50%" rx="100" ry="50" fill="blue"/>`); 
    });
});

// square shape
describe('Square', () => {
    test('a square is generated with matching parameters', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual(`<rect x="50" y="50" height="100" width="200" fill="red"/>`); 
    });
});

// triangle shape
describe('Triangle', () => {
    test('a triangle is generated with matching parameters', () => {
        const shape = new Triangle();
        shape.setColor('black');
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="50,150 250,150 150,20" fill="black"/>`); 
    });
});
