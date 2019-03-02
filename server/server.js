const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

// /** ---------- EXPRESS ROUTES ---------- **/
// app.post('/review', (req, res) => {
//     res.sendStatus(201);
// })
// router.get('/review', (req, res) => {
//         res.send(result.rows);
    
// })

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});