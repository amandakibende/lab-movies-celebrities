const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.model");

const celebrity = [
    {name : "Johnny Halliday", occupation: "Singer", catchphrase:"Allumez le feu !"}, 
    {name : "Pikachu", occupation: "Fighter", catchphrase:"Pika Pika !"}, 
    {name : "Mickael Jackson", occupation: "Singer", catchphrase:"Hee Hee !"}, 

];

mongoose.connect("mongodb://localhost/lab-movies-celebrities", {
    useNewUrlParser:true, 
    useCreateIndex:true,
    useUnifiedTopology:true, 
})
.then(()=>{

    Celebrity.create(celebrity)

    .then((celebrityDocs)=> {

         console.log(celebrityDocs)})

    .catch(e=>console.log(e))
})
.catch(e=>console.log(e))