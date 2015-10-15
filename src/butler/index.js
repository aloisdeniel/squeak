class Butler {
  constructor() {
    this.middlewares = [];
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  react(event,value) {

  }
}

module.exports = Butler;
