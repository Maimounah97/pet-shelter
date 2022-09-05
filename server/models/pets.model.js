const mongoose = require('mongoose'); //Teams
const PetsSchema = new mongoose.Schema({
    name: {
        type: String, unique: true,
        required: [ true, "Name is required." ],
        minlength: [ 3, "Name must be a minimum of 3 characters." ]
      },
      
      type: {
        type: String,
        required: [ true, "Type is required." ],
        minlength: [ 3, "Type must be a minimum of 3 characters." ]
      },
    
      desc: {
        type: String,
        required: [ true, "Description is required." ],
        minlength: [ 3, "Description must be a minimum of 3 characters." ]
      },
    
      skill1: {
        type: String,
      },
    
      skill2: {
        type: String,
      },
    
      skill3: {
        type: String,
      },
    
      likes: {
        type: Number,
        default: 0,
      }
    
}, {timestamps: true});



const Pets = mongoose.model("Pets", PetsSchema);

module.exports = Pets;