const mongoose = require("mongoose");
const Movies = require("../models/movie.model");

const movies = [

   { title: "It",
    genre: "Horror movie",
    plot:  "Scary clown who wants to kill people",
    cast : ["Bill Skarsgard", "Finn Wholfard"]},

    { title: "Rock n Roll",
    genre: "Comedy",
    plot:  "Adventure of a man that want his coolness back",
    cast : ["Guillaume Canet", "Marion Cotillard", "Johnny Halliday"]}


];

mongoose.connect("mongodb://localhost/lab-movies-celebrities", {
    useNewUrlParser:true, 
    useCreateIndex:true,
    useUnifiedTopology:true, 
})
.then(()=>{

     Movies.create(movies)

    .then((movieDocs)=> {

         console.log(movieDocs)})

    .catch(e=>console.log(e))
})
.catch(e=>console.log(e))