//to construct the plateau to be navigated by the Rover
function Plateau(x, y) {
    //assumes that the bottom coordinate of the Plateau is (0,0)
    this.bottomXCordinate = 0;
    this.topXCoordinate = x;
    this.bottomYCordinate = 0;
    this.topYCoordinate = y;
}
Plateau.prototype.topCoordinatesOfPlateau = function() {
    return "(" + this.topXCoordinate + "," + this.topYCoordinate + ")";
}
Plateau.prototype.getTopXCoordinate = function() {
    return this.topXCoordinate;
}
Plateau.prototype.getTopYCoordinate = function() {
    return this.topYCoordinate;
}
Plateau.prototype.containsCoordinates = function(x, y) {
    return x <= this.topXCoordinate && y <= this.topYCoordinate && y >= this.bottomYCordinate;
}
module.exports = Plateau;