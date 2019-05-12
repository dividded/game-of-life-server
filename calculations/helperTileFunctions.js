const isTileInArray = (tiles, tileToFind) => {
    return tiles.some((tile) =>
            tile.row === tileToFind.row && tile.col === tileToFind.col);
}

const getNeighborTiles = (tile) => {
    return [{row: tile.row - 1, col: tile.col - 1},
        {row: tile.row - 1, col: tile.col},
        {row: tile.row - 1, col: tile.col + 1},
        {row: tile.row, col: tile.col - 1},
        {row: tile.row, col: tile.col + 1},
        {row: tile.row + 1, col: tile.col - 1},
        {row: tile.row + 1, col: tile.col},
        {row: tile.row + 1, col: tile.col + 1}];
} 

const getTilesInArea = (tile) => {
    const neighborTiles = getNeighborTiles(tile);
    neighborTiles.push({row: tile.row, col: tile.col});

    return neighborTiles;
} 

module.exports.getNeighborTiles = getNeighborTiles;
module.exports.isTileInArray = isTileInArray;
module.exports.getTilesInArea = getTilesInArea;