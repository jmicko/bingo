const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('=======IN GET ROUTE')
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.log('numbers GET failed: ', err);
            res.sendStatus(500);
        });
})

router.put('/', (req, res) => {
    // start an array to store the numbers
    const numberList = [];
    // make 48 numbers
    for (let i = 0; i < 48; i++) {
        // make a random number between 1, 100
        let rand = Math.floor(Math.random() * 100) + 1;
        // push the new number into the array
        numberList.push(rand)
    }
    // console.log(numberList);
    const queryText = `INSERT INTO "public"."cards"("user_id", "card_numbers") VALUES($1, $2) RETURNING "id", "user_id", "card_numbers";`
    pool.query(queryText, [req.user.id, numberList])
        .then((result) => {
            console.log(result.rows[0].card_numbers);
            res.send(result.rows[0].card_numbers)
        })
        .catch((err) => {
            console.log('numbers GET failed: ', err);
            res.sendStatus(500);
        });
});

module.exports = router;
