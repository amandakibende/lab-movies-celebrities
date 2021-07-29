const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");




router.get("/create", (req, res, next)=>{

    res.render("celebrities/new-celebrity.hbs")
})

router.post("/create", (req, res, next) =>{


    Celebrity.create(req.body)
    .then(()=> {

        res.render("/celebrities")

    }
     
     )
    .catch((e)=> {

        res.render("celebrities/new-celebrity")

    } )

 
});


router.get("/celebrities", (req, res, next) =>{

    Celebrity.find()
    .then( (celebrityList)=>{
        res.render("celebrities/celebrities", {star : celebrityList})
    })
    .catch(e => console.log(e))
})


module.exports=router; 