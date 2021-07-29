const router = require("express").Router(); 
const Movies = require("../models/movie.model");

router.get("/create", (req, res, next)=>{

    

    res.render("movies/new-movie")

})


router.post("/create", (req, res, next)=>{


    Movies.create(req.body)
    .then(()=>{
        res.render("movies/new-movie")
    })
    .catch(e=>console.log(e))

    
});


module.exports = router;