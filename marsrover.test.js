let Plateau = require('./plateau');
let Rover = require('./marsrover');

describe('Marsrover should', () => {
    let marsrover = {};
    let plateau;
    beforeEach(() => {
        plateau = new Plateau(5, 5);
        // will construct a plateau that ranges between (0,0) and (5,5) and
        //only this region will be navigated by the rover
        marsrover = new Rover(1, 2, "E", plateau);
        //to create a Rover object that is currently standing at (1,2) and facing East
    });

    function multipleMove(times) {
        for (var i = 0; i < times; i++) {
            marsrover.moveRover()
        }
    }
    test('create a rover object', () => {
        expect(marsrover.xCoordinate).toBe(1);
    });
    test('return the current position', () => {
        let currentPosition = marsrover.currentPosition()
        expect(currentPosition).toEqual({ x: 1, y: 2 });
    });
    test('return the current direction', () => {
        let currentDirection = marsrover.currentDirection()
        expect(currentDirection).toBe("E");
    });
    test('does not move outside of the plateau', () => {
        let rover = new Rover(5, 2, "E", new Plateau(5, 8));
        rover.moveRover();
        expect(rover.currentPosition()).toEqual({ x: 5, y: 2 });
    });

    //move - navigate
    //current position (1,2) and direction East
    test('move north', () => { //increase Y
        marsrover.changeDirection("N");
        marsrover.moveRover();
        expect(marsrover.currentPosition()).toEqual({ x: 1, y: 3 });
    })
    test('move east', () => { //increase X
        marsrover.changeDirection("E");
        marsrover.moveRover();
        expect(marsrover.currentPosition()).toEqual({ x: 2, y: 2 });
    })
    test('move south', () => { //decrease Y
        marsrover.changeDirection("S");
        marsrover.moveRover();
        expect(marsrover.currentPosition()).toEqual({ x: 1, y: 1 });
    })
    test('move west', () => { //decrease X
            marsrover.changeDirection("W");
            marsrover.moveRover();
            expect(marsrover.currentPosition()).toEqual({ x: 0, y: 2 });
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
    test('handle multiple command', () => {
        //current position = '1 2 E'
        multipleMove(2);
        //current position = '2 2 E'
        //current position = '3 2 E'
        marsrover.turnRight();
        //current position = '3 2 S'
        marsrover.changeDirection("S");
        marsrover.moveRover();
        //current position = '3 1 S'
        marsrover.turnRight();
        //current position = '3 1 W'
        marsrover.moveRover();
        //current position = '2 1 W'
        marsrover.turnRight();
        //current position = '2 1 N'
        marsrover.moveRover();
        //current position = '2 2 N'
        marsrover.turnLeft();
        //current position = '2 2 W'
        marsrover.moveRover();
        //current position = '1 2 W'
        expect(marsrover.currentPosition()).toEqual({ x: 1, y: 2 });

    });

    test('only change the position of a single rover', () => {
        marsrover2 = new Rover(1, 2, "E");
        marsrover.moveRover();
        expect(marsrover2.currentPosition()).toEqual({ x: 1, y: 2 })
    })

});