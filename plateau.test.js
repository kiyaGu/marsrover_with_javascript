let Plateau = require('./plateau');

describe('The plateau should', () => {
    test('return the top coordinates of the plateau', () => {
        let plateau = new Plateau(6, 5);
        let topCoordinatesOfPlateau = plateau.topCoordinatesOfPlateau();
        expect(topCoordinatesOfPlateau).toBe('(6,5)');
    });
    test('know about its boundaries', () => {
        let plateau = new Plateau(4, 4);
        expect(plateau.containsCoordinates(3, 4)).toBe(true);
    })
    test('know about its east boundary', () => {
        let plateau = new Plateau(4, 4);
        expect(plateau.containsCoordinates(5, 4)).toBe(false);
    })
    test('know about its north boundary', () => {
        let plateau = new Plateau(4, 4);
        expect(plateau.containsCoordinates(3, 5)).toBe(false);
    })
    test('know about its south boundary', () => {
        let plateau = new Plateau(4, 4);
        expect(plateau.containsCoordinates(3, -1)).toBe(false);
    })
})