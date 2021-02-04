const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // start an array to store the numbers
    const numberList = [];
    // make 48 numbers
    for (let i = 0; i < 48; i++) {
        // make a random number between 1, 100
        let rand = Math.floor(Math.random() * 100) + 1;
        // push the new number into the array
        numberList.push(rand)
        console.log(numberList);
    }
    res.send(numberList)
    .catch((err) => {
        console.log('numbers GET failed: ', err);
        res.sendStatus(500);
      });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
