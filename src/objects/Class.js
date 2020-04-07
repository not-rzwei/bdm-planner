import List from "../data/class.json";

class Class {
  id;
  name;
  mainhand;
  offhand;
  list = List;

  constructor(name) {
    this.changeTo(name);
  }

  changeTo(name) {
    const klass = this.list.find(c => name == c.name);

    this.id = klass.id;
    this.name = klass.name;
    this.mainhand = klass.mainhand;
    this.offhand = klass.offhand;
  }
}

export default Class;
