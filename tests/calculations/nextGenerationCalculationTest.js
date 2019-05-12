
const calculateNextGeneration = require('../../calculations/calculateNextGeneration');

const DEFAULT_TILES_AROUND_DEAD_TO_CREATE_LIFE = 3;
const DEFAULT_TILES_AROUND_LIFE_TO_CREATE_LIFE = 2;
const LINE_OF_3_TILES = [{row: 1, col: 0}, {row: 2, col: 0}, {row: 3, col: 0}];
const ROTATED_LINE_OF_3_TILES = [{row: 2, col: -1}, {row: 2, col: 0}, {row: 2, col: 1}];
const UNCONNECTED_TILES = [{row: 1, col: 10}, {row: 1, col: 0}, {row: 3, col: 3}];
const TILE_2x2_SQUARE = [{row: 1, col: 1}, {row: 2, col: 1}, {row: 2, col: 2}, {row: 1, col: 2}];

const calculateNextGenerationWithDefaultRules = (liveTiles) => {
  return calculateNextGeneration(liveTiles, 
                        DEFAULT_TILES_AROUND_DEAD_TO_CREATE_LIFE, 
                        DEFAULT_TILES_AROUND_LIFE_TO_CREATE_LIFE);
}

describe("Next generation calculation", () => {
  describe("With default rules", () => {
    describe("Given no tiles", () => {
      it("Should return generation with no tiles", () => {
        expect(calculateNextGenerationWithDefaultRules([])).toEqual([]);
      });
    });

    describe("Given a line of 3 tiles", () => {
      it("Should return generation with 3 rotated tiles", () => {
        const nextGenerationOfTiles = 
                calculateNextGenerationWithDefaultRules(LINE_OF_3_TILES);
       
        expect(nextGenerationOfTiles).toHaveLength(ROTATED_LINE_OF_3_TILES.length);
        expect(nextGenerationOfTiles).toEqual(ROTATED_LINE_OF_3_TILES);
      });
    });

    describe("Given unconnected tiles", () => {
      it("Should return generation with no live tiles", () => {
        expect(calculateNextGenerationWithDefaultRules(UNCONNECTED_TILES)).toEqual([]);
      });
    });

    describe("Given 2x2 tile square", () => {
      it("Should return generation with unchanged tiles", () => {
        const nextGenerationOfTiles = 
                calculateNextGenerationWithDefaultRules(TILE_2x2_SQUARE);
        
        expect(nextGenerationOfTiles).toHaveLength(TILE_2x2_SQUARE.length);
        expect(nextGenerationOfTiles).toEqual(expect.arrayContaining(TILE_2x2_SQUARE));
      });
    });
  });
});
