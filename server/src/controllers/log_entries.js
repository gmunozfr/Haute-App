'use strict'

var LogEntry = require('../models/log_entry')//it is going to load the mongoose model


exports.index = function(req, res){ //exporting multiple functions, taking a request and returning a response 
             LogEntry.find({}, function(err, logEntry) { //calling the model log entry, finding all the logs
                if (err) res.send(err)//if there's not an error is going to call Json
                res.json(logEntry)//taking the log entry from mongodb into the mongoose model and controller
                               //and print it out as json to the user who requested it!!
  }) 
 }

     exports.create = function (req, res_) {
            var newLogEntry = new LogEntry(req.body)//getting a new instance of the entry model. Passing the request.body which has all of
                                                    //the fields for log entry sent from http request
 }
