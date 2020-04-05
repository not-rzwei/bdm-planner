const Equipment = {
  id: 0,
  name: "",
  type: "",
  grade: "",
  stats: {
    ap: 0,
    dp: 0
  },
  enhancement: {
    max: 40,
    current: 0
  }
};

Equipment.fullName = function() {
  return `${this.name} ${this.type}`;
};

export default Equipment;
