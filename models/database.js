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
// first parameter in model is table_name
module.exports = model("users", empSchema); 