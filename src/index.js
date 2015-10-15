'use strict';

var io = require('socket.io')(http);



io.on('connection', function(socket){

  console.log('socket connected');


});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

module.exports = {};
