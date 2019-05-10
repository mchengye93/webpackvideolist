const connection = require('./index.js');

const getAllMovies = function(res) {
    connection.query('SELECT * FROM movies', (err,data)=> {
        if (err){
            res.status(500);
            res.send(err);
        } else {
            res.status(200);
            res.send(data);
        }
    })
}

module.exports = {
    getAllMovies: getAllMovies
}