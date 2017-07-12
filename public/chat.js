// MAKE CONNECTION

var socket = io.connect('http://localhost:3000');


// QUERY DOM
var message = document.getElementById('message')
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output');


// EMIT EVENTS

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
});


// LISTEN FOR EVENTS
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ' </strong>' + data.message + '</p>'
})