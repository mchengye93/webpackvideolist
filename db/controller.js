const connection = require('./index.js');

const getAllMovies = function(res) {
    console.log('inside db controller get allmovie!');
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
const searchMovie = function (req,res){
    console.log('inside db controller searchMovie req:',req.query.title);
    //${req.query.title}
    connection.query("SELECT title FROM movies WHERE title LIKE '%" +req.query.title+"%'", (err,data)=> {
        if (err){
            console.log('err search query' ,err);
            res.status(500);
            res.send(err);
        } else {
            console.log(data);
            res.status(200);
            res.send(data);
        }
    })
}

const addMovie = function (req,res){
    console.log('inside db control addMovie req:', req.body);
    

    connection.query(`INSERT INTO movies (title) VALUES ("${req.body.title}")`, (err,data)=> {
        if (err){
            res.status(500);
            res.send(err);
        } else {
            console.log('movie inserted!');
            res.status(200);
            res.send(data);
        }
    })
}

const toggleMovie = function(req,res){
    console.log('inside toggleMovie req', req.body.id);
    // res.end();
    connection.query(`UPDATE movies SET watched= !watched WHERE id=${req.body.id}`, (err,data)=>{
        if (err){
            res.status(500);
            res.send(err);
        } else {
            console.log('movie watch updated!');
            res.status(200);
            res.send(data);
        }
    })
}

const watchMovies = function(req,res) {
    console.log('inside db.watchmovies req.query', req.query);
    connection.query(`SELECT * FROM movies WHERE watched= ${req.query.watched}`, (err,data)=> {
        if (err){
            console.log('err search query' ,err);
            res.status(500);
            res.send(err);
        } else {
            console.log(data);
            res.status(200);
            res.send(data);
        }
    })
    //res.end();

}
module.exports = {
    getAllMovies: getAllMovies,
    searchMovie: searchMovie,
    addMovie: addMovie,
    toggleMovie: toggleMovie,
    watchMovies: watchMovies
}