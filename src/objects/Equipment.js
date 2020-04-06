import EnhancementData from "../data/enhancement.json";

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
  bound = false;
  enhancementData = EnhancementData;

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
    return `${this.name} ${this.type.charAt(0).toUpperCase() +
      this.type.slice(1)}`;
  }

  get totalCP() {
    return this.stats.ap + this.stats.dp;
  }

  setEnhancement(level) {
    if (level < 0 || level > this.enhancement.max) return;

    const enhanceData = this.enhancementData[this.type][this.grade];
    const enhanceDataUntilLevel = enhanceData.slice(0, level + 1);

    const enhanceSum = enhanceDataUntilLevel.reduce(
      (prev, next) => prev + next,
      this.stats.ap
    );

    this.enhancement.current = level;
    this.stats.ap = enhanceSum;
  }
}

export default Equipment;
