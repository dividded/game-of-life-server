const {getTilesInArea, getNeighborTiles} = require('../../calculations/helperTileFunctions');

const NUMBER_OF_TILES_IN_AREA = 9;
const NUMBER_OF_NEIGHBOR_TILES_AROUND_TILE = 8;
const TILE = {row: 0, col: 0};
const NEIGHBOR_TILES_AROUND_TILE = [{row: -1, col: -1},
                                 {row: -1, col: 0},
                                 {row: 0, col: -1},
                                 {row: -1, col: 1},
                                 {row: 1, col: -1},
                                 {row: 1, col: 0},
                                 {row: 1, col: 1}];
const TILES_IN_TILE_AREA = [{row: -1, col: -1},
                            {row: -1, col: 0},
                            {row: 0, col: -1},
                            {row: -1, col: 1},
                            {row: 1, col: -1},
                            {row: 0, col: 0},
                            {row: 1, col: 0},
                            {row: 1, col: 1}];

describe("Getting tiles in area of tile", () => {
    it("Should return all tiles in area", () => {
        const tilesInArea = getTilesInArea(TILE);

        expect(tilesInArea).toHaveLength(NUMBER_OF_TILES_IN_AREA);
        expect(tilesInArea).toEqual(expect.arrayContaining(TILES_IN_TILE_AREA));
    });
});

describe("Getting neighbors around tile", () => {
    it("Should return all of his neighbors", () => {
        const neighborTiles = getNeighborTiles(TILE);

        expect(neighborTiles).toHaveLength(NUMBER_OF_NEIGHBOR_TILES_AROUND_TILE);
        expect(neighborTiles).toEqual(expect.arrayContaining(NEIGHBOR_TILES_AROUND_TILE));
    });
});
