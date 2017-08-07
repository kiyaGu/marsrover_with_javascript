function Rover(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
}
//to return the current position
Rover.prototype.currentPosition = function() {
    return this.x + " " + this.y + " " + this.direction;
}
module.exports = Rover;