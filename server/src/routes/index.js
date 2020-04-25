'use strict';

module.exports = function (app) {
    const logEntries = require('./log_entries') //defining routes for the log entries   
    logEntries(app) //// here we're calling the new log entries object already created
}

