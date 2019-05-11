/*
bodyParse.json very important
*/
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const db = require('./db/controller.js')

app.use(bodyParser.json());
app.use(express.static('client/dist/'));


app.get('/movielist', (req, res) => {
    db.getAllMovies(res);
});

app.get('/searchMovie', (req,res) =>{
    db.searchMovie(req , res);
})

app.post('/addMovie', (req,res) =>{
    db.addMovie(req,res);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))