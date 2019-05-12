const express = require('express');
const router = express.Router();
const calculateNextGeneration = require('../calculations/calculateNextGeneration');

router.post('/calculate', function(req, res, next) {
    const {aliveTiles, aroundDeadToCreateLife, aroundLifeToKeepLife} = req.body;
    
    const aliveTilesInNextGeneration = calculateNextGeneration(aliveTiles, 
        aroundDeadToCreateLife, 
        aroundLifeToKeepLife);

    res.json(aliveTilesInNextGeneration);
});

module.exports = router;