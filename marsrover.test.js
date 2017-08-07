let Rover = require('./marsrover.js');
describe('Marsrover should', () => {
    let marsrover = {};
    beforeEach(() => {
        marsrover = new Rover(1, 2, "E");
    });
    test('create an object', () => {
        // marsrover = new Rover();
        expect(marsrover.x).toBe(1);
    });
});