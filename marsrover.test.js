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

    // to change the direction of the rover left / right

    test('turn left while the rover is facing north', () => {
        expect(marsrover.turnLeft()).toBe("W");
    });
    test('turn right while the rover is facing north', () => {
        expect(marsrover.turnRight()).toBe("E");
    });
    test('turn left while the rover is facing east', () => {
        expect(marsrover.turnLeft()).toBe("N");
    });
    test('turn right while the rover is facing east', () => {
        expect(marsrover.turnRight()).toBe("S");
    })
    test('turn left while the rover is facing west', () => {
        expect(marsrover.turnLeft()).toBe("S");
    });
    test('turn right while the rover is facing west', () => {
        expect(marsrover.turnRight()).toBe("N");
    })
    test('turn left while the rover is facing south', () => {
        expect(marsrover.turnLeft()).toBe("E");
    });
    test('turn right while the rover is facing south', () => {
        expect(marsrover.turnRight()).toBe("W");
    })

});