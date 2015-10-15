var io = null;

class Controller {

  constructor(socket) {
    this.socket = socket;
    this.socket.on('room:join', join);
    this.socket.on('room:exit', exit);
    this.socket.on('room:message', message);
    this.socket.on('disconnect', disconnect);
    console.log('socket connected');
  }

  join(newUser) {
    console.log('user joined the room: ' + newUser);
    io.emit('room:join', newUser);
  }

  exit(oldUser){
    console.log('user exited the room: ' + oldUser);
    io.emit('room:exit', oldUser);
  }

  message(msg){
    console.log('message: ' + msg);
    io.emit('room:message', msg);
  }

  disconnect(){
    this.socket = null;
    console.log('socket disconnected');
  }
}

module.exports = function(serverIo) {
  io = serverIo;
  return Controller;
};
