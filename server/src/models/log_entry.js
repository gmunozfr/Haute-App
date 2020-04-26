// <!-- The following code contains a similar approach in regards to the following tutorial:https://www.youtube.com/watch?v=WV7DYx2M-Nc -->
// <!-- This is the github account of the author: https://github.com/marktellez/marktellez.github.io/commits/master?after=fd3b6cd992d64bce29136c963b5531b628b42677+34 -->


'use strict';
//schema that defines the model which allows to interact with it translating to mongodb a sql code being
//  able to insert, update, delete.

var mongoose = require('mongoose')
var Schema = mongoose.Schema//getting access to the schema from mongoose

var LogEntrySchema = new Schema({ //defining the fiels of this model, is the new mongoose schema
    
     date: {// when creating a log entry schema is going to get the date when the create action was done!
        type: Date,
        default: Date.new
    },
    brand: {//getting the brand of the watch
        type: String,
        required: true
    },
    price: {//defining the price of the watch
        type: Number,
        required: true
    },
     precision	: { //obtaining the precision of the watch
        type: Number,
        required: true
    },
     discount	: { //defining the discount of the watch
        type: Number,
        required: true
    },
    stock: { //availability of each item
        type: String,
        require: true
    }, 
    comments: {//defining comments
        type: String,
        require: true
    }
  })

  module.exports = mongoose.model('LogEntry', LogEntrySchema)//passing the models name and it's going to be map to the log entry schema
