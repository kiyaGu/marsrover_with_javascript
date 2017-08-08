const readline = require('readline');
const prompt = require('prompt');

function Rover(x, y, direction) {
    this.xCordinate = x;
    this.yCordinate = y;
    this.direction = direction;
}

//to return the current position
Rover.prototype.currentPosition = function() {
    return this.xCordinate + " " + this.yCordinate + " " + this.direction;
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
    switch (command.toUpperCase()) {
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

var schema = {
    properties: {
        curPosition: {
            message: 'What is the current position of the Rover',
        },
        commands: {
            message: 'What is the navigation command',
        }
    }
};
let x, y, direction;
prompt.get(schema, (err, result) => {
    curentPos = result.curPosition.split(" ");
    commands = result.commands.split("");
    x = curentPos[0];
    y = curentPos[1];
    direction = curentPos[2];
    let marsrover = new Rover(x, y, direction);
    commands.forEach((element) => {
        marsrover.executeCommand(element);
    });
});

module.exports = Rover;