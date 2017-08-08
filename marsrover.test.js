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
    test('return the current position', () => {
        let currentPosition = marsrover.currentPosition()
        expect(currentPosition).toBe('1 2 E');
    });

    //move - navigate
    test('move north', () => {
        expect(marsrover.moveNorth()).toBe(3);
    })
    test('move east', () => {
        expect(marsrover.moveEast()).toBe(2);
    })
    test('move south', () => {
        expect(marsrover.moveSouth()).toBe(1);
    })
    test('move west', () => {
        expect(marsrover.moveWest()).toBe(0);
    })

    // to change the direction of the rover left / right
    test('turn left while the rover is facing east', () => {
        expect(marsrover.turnLeft()).toBe("N");
    });
    test('turn right while the rover is facing east', () => {
        expect(marsrover.turnRight()).toBe("S");
    })
    test('turn left while the rover is facing north', () => {
        marsrover.changeDirection("N");
        expect(marsrover.turnLeft()).toBe("W");
    });
    test('turn right while the rover is facing north', () => {
        marsrover.changeDirection("N");
        expect(marsrover.turnRight()).toBe("E");
    });
    test('turn left while the rover is facing west', () => {
        marsrover.changeDirection("W");
        expect(marsrover.turnLeft()).toBe("S");
    });
    test('turn right while the rover is facing west', () => {
        marsrover.changeDirection("W");
        expect(marsrover.turnRight()).toBe("N");
    })
    test('turn left while the rover is facing south', () => {
        marsrover.changeDirection("S");
        expect(marsrover.turnLeft()).toBe("E");
    });
    test('turn right while the rover is facing south', () => {
        marsrover.changeDirection("S");
        expect(marsrover.turnRight()).toBe("W");
    })
    test.only('handle multiple command', () => {
        //current position = '1 2 E' 
        marsrover.moveEast();
        //current position = '2 2 E'
        marsrover.moveEast();
        //current position = '3 2 E'
        marsrover.turnRight();
        //current position = '3 2 S'
        marsrover.moveSouth();
        //current position = '3 1 S'
        marsrover.turnRight();
        //current position = '3 1 W'
        marsrover.moveWest();
        //current position = '2 1 W'
        marsrover.turnRight();
        //current position = '2 1 N'
        marsrover.moveNorth();
        //current position = '2 2 N'
        marsrover.turnLeft();
        //current position = '2 2 W'
        marsrover.moveWest();
        //current position = '1 2 W'
        expect(marsrover.currentPosition()).toBe("1 2 W")

    });

});