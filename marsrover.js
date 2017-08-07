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


module.exports = Rover;