const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({


    title: {
        type: String,

    },

    author: {
        type: String,
      
    },

    level: {
        type: String,
       
    },

    isbn: {
        type: String,
        
    },
  
    copies: {
        type: Number,
        default:15 
    }



}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);