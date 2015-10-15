class Room {
  constructor() {
    this.users = {};
    this.messages = [];
  }

  connect(user){
    this.users[email] = user;
  }

  disconnect(user){
    delete this.users[email];
  }

  post(message){
    this.messages.push(message);
  }
}

module.exports = Room;
