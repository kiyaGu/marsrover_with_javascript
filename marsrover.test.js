let Rover = require('./marsrover.js');
describe('Marsrover should', () => {
    let marsrover = {};
    beforeEach(() => {
        marsrover = new Rover(1, 2, "E");
    });
    test('create an object', () => {
        // marsrover = new Rover();
        expect(marsrover.x).toBe(1);
    });
    test('should return the current position', () => {
        let currentPosition = marsrover.currentPosition()
        expect(currentPosition).toBe('1 2 E');
    });

    //move - navigate
    test('should move north', () => {
        expect(marsrover.moveNorth()).toBe(3);
    })
    test('should move east', () => {
        expect(marsrover.moveEast()).toBe(2);
    })
    test('should move south', () => {
        expect(marsrover.moveSouth()).toBe(1);
    })
    test('should move west', () => {
        expect(marsrover.moveWest()).toBe(0);
    })

});