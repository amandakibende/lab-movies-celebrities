//  Add your code here
const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const celebritySchema = new mongoose.Schema ({
    name : String,
    occupation: String,
    catchphrase: String, 

});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity; 