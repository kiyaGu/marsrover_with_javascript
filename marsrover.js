function Rover(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
}
//to return the current position
Rover.prototype.currentPosition = function() {
    return this.x + " " + this.y + " " + this.direction;
}

//to move the rover to navigate

Rover.prototype.moveNorth = function() {
    return ++this.y;
}
Rover.prototype.moveEast = function() {
    return ++this.x;
}
Rover.prototype.moveSouth = function() {
    return --this.y;
}
Rover.prototype.moveWest = function() {
    return --this.x;
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


module.exports = Rover;