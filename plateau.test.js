let Plateau = require('./plateau');

describe('The plateau should', () => {
    test('return the top coordinates of the plateau', () => {
        let plateau = new Plateau(6, 5);
        let topCoordinatesOfPlateau = plateau.topCoordinatesOfPlateau();
        expect(topCoordinatesOfPlateau).toBe('(6,5)');
    });
    test('know about its boundaries', () => {
        let plateau = new Plateau(4, 4);
        expect(plateau.containsCoordinates(5, 4)).toBe(false);
    })
})