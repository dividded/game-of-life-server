const isTileInArray = require("./helperTileFunctions").isTileInArray;
const getTilesInArea = require("./helperTileFunctions").getTilesInArea;
const getNeighborTiles = require("./helperTileFunctions").getNeighborTiles;

const calculateNextGeneration = (aliveTiles, tilesAroundDeadToCreateLife, tilesAroundLifeToKeepLife) => {
    let aliveTilesInNextGeneration = [];
    let checkedTiles = [];

    aliveTiles.forEach(aliveTile => {
        getTilesInArea(aliveTile).forEach(tileInArea => {
            let wasTileChecked = isTileInArray(checkedTiles, tileInArea);

            if(!wasTileChecked) {
                checkedTiles.push(tileInArea);
                let neighborCount = countNeighbors(aliveTiles, tileInArea);
                let isTileAlive = isTileInArray(aliveTiles, tileInArea);

                if(isTileAliveInNextGeneration(isTileAlive, 
                                               neighborCount, 
                                               tilesAroundDeadToCreateLife, 
                                               tilesAroundLifeToKeepLife)) {
                    aliveTilesInNextGeneration.push(tileInArea);
                }
            }
        });
    });
    
    return aliveTilesInNextGeneration;
}

const countNeighbors = (aliveTiles, tile) => {
    const aliveNeighbors = getNeighborTiles(tile).filter(neighbor => 
                                                isTileInArray(aliveTiles, neighbor));
    
    return aliveNeighbors.length;                
}

const isTileAliveInNextGeneration = (isTileAlive,
                                     neighborCount, 
                                     tilesAroundLifeToKeepLife, 
                                     tilesAroundDeadToCreateLife) => {
    return (isTileAlive && neighborCount === tilesAroundDeadToCreateLife) || 
            neighborCount === tilesAroundLifeToKeepLife 
}

module.exports = calculateNextGeneration;