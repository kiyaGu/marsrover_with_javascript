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
Rover.prototype.currentDirection = function() {
        return this.direction;
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
            this.changeDirection("N");
            break;
        case "N":
            this.changeDirection("W");
            break;
        case "W":
            this.changeDirection("S");
            break;
        case "S":
            this.changeDirection("E");
            break;
    }
    return this.direction;
}
Rover.prototype.turnRight = function() {
    let direction = this.direction;
    switch (direction) {
        case "E":
            this.changeDirection("S");
            break;
        case "N":
            this.changeDirection("E");
            break;
        case "W":
            this.changeDirection("N");
            break;
        case "S":
            this.changeDirection("W");
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

// to run the marsrover by accepting input from user uncomment this section and
// run 'node marsrover'
//Assumption: no error handling as the user is assumed will put proper input
// console.log("Please, write the input by separating them with whitespace e.g. '1 2 E'");
// let pla = prompt('What is the top border/coordinate of the Plateau : ').split(" ");
// const curPosition = prompt('What is the current position of the Rover : ').split(" ");
// const commandList = prompt('What is the navigation command : ').split("");
// let x, y, direction;
// plateau = new Plateau(pla[0], pla[1]);
// x = parseInt(curPosition[0]);
// y = parseInt(curPosition[1]);
// direction = curPosition[2].toUpperCase();
// let marsrover = new Rover(x, y, direction, plateau);
// commandList.forEach(function(element) {
//     element = element.toUpperCase();
//     marsrover.executeCommand(element);
// });
// console.log(marsrover.currentPosition(), marsrover.currentDirection());

module.exports = Rover;