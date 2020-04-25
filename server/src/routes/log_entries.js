'use strict';

module.exports = function(app) {//using the same pattern exports having a function that takes the app
    var controller = require('../controllers/log_entries')//this are the controller actions for log entries

    app.route('/log-entries')//at the log entries
     .get(controller.index)//implementing a get request and getting back a Json of all the log entries 
     .post(controller.create)//post http method

    app.route('/log-entries/:id') //route parameter, returning to javascript as ID
     .get(controller.show)  //is going to give the Json for a single log entry
     .put(controller.update) //having a log entry and putting a new value
     .delete(controller.destroy) //deleting values from the Id entry
     

}

