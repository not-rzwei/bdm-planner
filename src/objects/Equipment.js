class Equipment {
  id;
  name;
  type;
  grade;
  stats = {
    ap: 0,
    dp: 0
  };
  enhancement = {
    max: 40,
    current: 0
  };

  constructor(obj = {}) {
    this.id = obj.id || 0;
    this.name = obj.name || "";
    this.type = obj.type || "";
    this.grade = obj.grade || "";

    if (obj.stats !== undefined) {
      this.stats.ap = obj.stats.ap;
      this.stats.dp = obj.stats.dp;
    }
  }

  get fullName() {
    return `${this.name} ${this.type}`;
  }
}

export default Equipment;
