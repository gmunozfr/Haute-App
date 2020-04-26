// <!-- The following code contains a similar approach in regards to the following tutorial:https://www.youtube.com/watch?v=WV7DYx2M-Nc -->
// <!-- This is the github account of the author: https://github.com/marktellez/marktellez.github.io/commits/master?after=fd3b6cd992d64bce29136c963b5531b628b42677+34 -->


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
            newLogEntry.save(function(err, logEntry) {//saving to the db
                if (err) res.send(err)//if there's an error is going to be sent to the request
                 res.json(logEntry) //taking the new created log entry and send it back as Json
            })
            }

                //Taking a single log entry. The name of the variable in the route determines this key name "id"--> (app.route('/log-entries/:id'))
    exports.show = function(req, res){
                LogEntry.findById(req.params.id, function(err, logEntry){
                    if (err) res.send(err)//sending error
                    res.json(logEntry)//founded it and sent it!
                })  
        }

            //updating the model, passing in the request.body and the kew true
    exports.update = function (req, res){
            LogEntry.findOneAndUpdate({_id: req.params.id }, req.body, {new: true}, function(err, logEntry){
                if (err) res.send(err)//sending error
                res.json(logEntry)//sending the Json for the object
            })
        }

            //deleting the object
    exports.destroy = function (req, res){
                LogEntry.deleteOne({_id: req.params.id }, function(err, logEntry){
                    if (err) res.send(err)//passing back an error
                    res.json({ message: 'log entry (${req.params.id}) successfully deleted'})//because the log entry is deleted (specifying which one), there is not a log entry to be sent back
                })
            }




