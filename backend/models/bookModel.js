import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    
    
    title: {
        type:String,
        required: true},
        
    author: {
        type:String,
        required: true},

    description: {
        type:String,
        required: true},
    
    images: 
        {
            url: {
                type:String,
                required: true
              },

            },

    category: {
        type:String,
        required: true,
        enum:{
            values:[
                "romane",
                "lehrbücher",
                "Kinderbücher",
                "Kochbücher",
            ]
        }


    }
        
    });

 

export const bookModel = mongoose.model('book', bookSchema);