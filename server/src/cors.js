// <!-- The following code contains a similar approach in regards to the following tutorial:https://www.youtube.com/watch?v=WV7DYx2M-Nc -->
// <!-- This is the github account of the author: https://github.com/marktellez/marktellez.github.io/commits/master?after=fd3b6cd992d64bce29136c963b5531b628b42677+34 -->


'use strict';

module.exports = function(app) { //I'm going to export this to a function which takes the express app
    var cors = require('cors')
    var corsOptions = {
        origin: function(origin, callback) {//when the request gets into the server and if the origin is the url, hostname or domain and port especified so it's allowed to connect
            if (process.env.CORS_WHITELIST.split(' ').indexOf(origin) !== -1) { //if the origin ie localhost is in the cors whitelist the connection will be allowed
                    callback (null, true)
            } else {
                callback(new Error('Is not permited by CORS config'))//otherwise it will return an error
            }
        }, 
        methods: "GET, HEAD, PUT, PATCH, POST, DELETE", //methods to be allowed
    }
    app.options('*', cors(corsOptions))//allows to have the options of methods
    app.use(cors(corsOptions))//to check if the cors options want to use cors using those options
}
