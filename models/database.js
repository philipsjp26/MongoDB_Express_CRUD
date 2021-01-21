const { Schema, model } = require('mongoose'); 
const empSchema = new Schema({
    name: {
        desc:"add_data",
        type: String,
        required: true
    },
    age:{
        type: Number
    }
});
module.exports = model("Users", empSchema); 