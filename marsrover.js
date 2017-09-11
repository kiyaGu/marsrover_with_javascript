/** 
 directions : E - > East, N -> North and so on
 commands : M - move the rover one step forward in the direction the Rover
            is facing at the time of the command
            R - turn the Rover to the right to make it face another direction
            the turn is 90 degree
            L - turn the Rover to the left 
*/

const readline = require('readline');
const prompt = require('prompt-sync')();
const Plateau = require('./plateau');


function Rover(x, y, direction, plateau) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.direction = direction;
    this.plateau = plateau;
}

//to return the current position
Rover.prototype.currentPosition = function() {
        return { x: this.xCoordinate, y: this.yCoordinate };
    }
    //to check if the current move is within the given/constructed plateau
Rover.prototype.isMoveValid = function() {
    return this.plateau.containsCoordinates(this.xCoordinate, this.yCoordinate);
}
Rover.prototype.makeTheMove = function(dx, dy) {
        const newY = this.yCoordinate + dy;
        const newX = this.xCoordinate + dx;
        const isMoveValid = this.plateau.containsCoordinates(newX, newY);
        if (isMoveValid) { //if the move is allowed
            this.xCoordinate = newX;
            this.yCoordinate = newY;
        }
    }
    //to move the rover to navigate
    // Rover.prototype.moveNorth = function() {
    //     this.makeTheMove(0, 1);
    // }
    // Rover.prototype.moveEast = function() {
    //     this.makeTheMove(1, 0);
    // }
    // Rover.prototype.moveSouth = function() {
    //     this.makeTheMove(0, -1);
    // }
    // Rover.prototype.moveWest = function() {
    //     this.makeTheMove(-1, 0);
    // }

Rover.prototype.moveRover = function() {
    switch (this.direction) {
        case "N":
            this.makeTheMove(0, 1);
            break;
        case "S":
            this.makeTheMove(0, -1);
            break;
        case "E":
            this.makeTheMove(1, 0);
            break;
        case "W":
            this.makeTheMove(-1, 0);
            break;
    }
}
Rover.prototype.changeDirection = function(newDirection) {
    this.direction = newDirection;
}
Rover.prototype.turnLeft = function() {
    switch (this.direction) {
        case "E":
            this.direction = "N";
            break;
        case "N":
            this.direction = "W";
            break;
        case "W":
            this.direction = "S";
            break;
        case "S":
            this.direction = "E";
            break;
    }
    return this.direction;
}
Rover.prototype.turnRight = function() {
    let direction = this.direction;
    switch (direction) {
        case "E":
            this.direction = "S";
            break;
        case "N":
            this.direction = "E";
            break;
        case "W":
            this.direction = "N";
            break;
        case "S":
            this.direction = "W";
            break;
    }
    return this.direction;
}
Rover.prototype.executeCommand = function(command) {
        switch (command) {
            case "M":
                this.moveRover();
                break;
            case "L":
                this.turnLeft();
                break;
            case "R":
                this.turnRight();
                break;
        }
        return this.currentPosition();
    }
    /*
    // to run the marsrover by accepting input from user uncomment this section and
    // run 'node marsrover'
    const pla = prompt('What is the top border/coordinate of the Plateau : ').split(" ");
    const curPosition = prompt('What is the current position of the Rover : ').split(" ");
    const commandList = prompt('What is the navigation command : ').split("");
    let x, y, direction;
    plateau = new Plateau(pla[0], pla[1]);
    x = curPosition[0];
    y = curPosition[1];
    direction = curPosition[2].toUpperCase();
    let marsrover = new Rover(x, y, direction);
    commandList.forEach(function(element) {
        element = element.toUpperCase();
        marsrover.executeCommand(element);
    });
    console.log(marsrover.currentPosition());
    */
module.exports = Rover;