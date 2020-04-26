// <!-- The following code contains a similar approach in regards to the following tutorial:https://www.youtube.com/watch?v=WV7DYx2M-Nc -->
// <!-- This is the github account of the author: https://github.com/marktellez/marktellez.github.io/commits/master?after=fd3b6cd992d64bce29136c963b5531b628b42677+34 -->


'use strict';

module.exports = function (app) {
    var logEntries = require('./log_entries') //defining routes for the log entries   
    logEntries(app) //// here we're calling the new log entries object already created
}

