let Plateau = require('./plateau');
let Rover = require('./marsrover');

describe('Marsrover should', () => {
    let marsrover = {};
    beforeEach(() => {
        plateau = new Plateau(5, 5);
        // will construct a plateau that ranges between (0,0) and (5,5) and
        //only this region will be navigated by the rover
        marsrover = new Rover(1, 2, "E");
        //to create a Rover object that is currently standing at (1,2) and facing East
    });

    function multipleMove(times) {
        for (var i = 0; i < times; i++) {
            marsrover.moveRover()
        }
    }
    test('create an object', () => {
        expect(marsrover.xCoordinate).toBe(1);
    });
    test('return the top coordinates of the plateau', () => {
        let topCoordinatesOfPlateau = plateau.topCoordinatesOfPlateau();
        expect(topCoordinatesOfPlateau).toBe('(5,5)');
    });
    test('return the current position', () => {
        let currentPosition = marsrover.currentPosition()
        expect(currentPosition).toBe("The rover is now at (1,2) position; facing 'E' direction");
    });
    test('validate the move', () => {
        // the move should be done if the new position is within the constructed plateau
        marsrover.turnRight();
        //current position = '1 2 S'
        marsrover.moveRover();
        //current position = '1 1 S'
        marsrover.moveRover();
        //current position = '1 0 S'
        marsrover.moveRover();
        //current position = '1 -1 S'
        //this move should not be carried out as it is outside of the plateau. 
        //the Rover should stay at '1 0 S'
        expect(marsrover.currentPosition()).toBe("The rover is now at (1,0) position; facing 'S' direction");
    });
    //move - navigate
    //current position (1,2) and direction East
    test('move north', () => { //increase Y
        expect(marsrover.moveNorth()).toBe(3);
    })
    test('move east', () => { //increase X
        expect(marsrover.moveEast()).toBe(2);
    })
    test('move south', () => { //decrease Y
        expect(marsrover.moveSouth()).toBe(1);
    })
    test('move west', () => { //decrease X
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
    test('handle multiple command', () => {
        //current position = '1 2 E'
        multipleMove(2);
        //current position = '2 2 E'
        //current position = '3 2 E'
        marsrover.turnRight();
        //current position = '3 2 S'
        marsrover.moveSouth();
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
        expect(marsrover.currentPosition()).toBe("The rover is now at (1,2) position; facing 'W' direction");

    });

});