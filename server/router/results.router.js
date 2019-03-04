const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/feedback', error);
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    console.log(req.body.feeling)
    console.log(req.body)
    pool.query('INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);', [req.body.feelings, req.body.understanding, req.body.support, req.body.comment])
        .then(() => {
            res.sendStatus(201)
        }).catch((error => {
            res.sendStatus(500);
            console.log('error in post', error);
        }))
})

router.delete('/:id', (req, res) => {
    console.log('server delete hit');
    console.log('req.params', req.params);
    pool.query(`DELETE FROM "feedback" WHERE "id"=$1;`, [req.params.id])
        .then(() => {
            res.sendStatus(201);
        }).catch(error => {
            console.log('error in delete', error);
            res.sendStatus(500);
        });
});

module.exports = router;