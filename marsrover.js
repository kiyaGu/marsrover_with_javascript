const readline = require('readline');
const prompt = require('prompt-sync')();

function Rover(x, y, direction) {
    this.xCordinate = x;
    this.yCordinate = y;
    this.direction = direction;
}

//to return the current position
Rover.prototype.currentPosition = function() {
    return "The rover is now at (" + this.xCordinate + "," + this.yCordinate + ") position; facing '" + this.direction + "' direction";
}

//to move the rover to navigate

Rover.prototype.moveNorth = function() {
    return ++this.yCordinate;
}
Rover.prototype.moveEast = function() {
    return ++this.xCordinate;
}
Rover.prototype.moveSouth = function() {
    return --this.yCordinate;
}
Rover.prototype.moveWest = function() {
    return --this.xCordinate;
}
Rover.prototype.moveRover = function() {
    switch (this.direction) {
        case "N":
            this.moveNorth();
            break;
        case "S":
            this.moveSouth();
            break;
        case "E":
            this.moveEast();
            break;
        case "W":
            this.moveWest();
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

let curentPos = [],
    commands = [];

const curPosition = prompt('What is the current position of the Rover : ').split(" ");
const commandList = prompt('What is the navigation command : ').split("");
let x, y, direction;
x = curPosition[0];
y = curPosition[1];
direction = curPosition[2].toUpperCase();
let marsrover = new Rover(x, y, direction);
commandList.forEach(function(element) {
    element = element.toUpperCase();
    marsrover.executeCommand(element);
});
console.log(marsrover.currentPosition());
module.exports = Rover;