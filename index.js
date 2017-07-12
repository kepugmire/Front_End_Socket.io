var express = require('express');
var socket = require('socket.io')


// App setup
var app = express();
var server = app.listen(3000, function(){
    console.log('listening for requests on port 3000,');
});

// Static files
app.use(express.static('public'));


// SOCKET SETUP
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data)
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    })

});



