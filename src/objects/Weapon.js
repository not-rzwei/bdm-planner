import Equipment from "./Equipment";

class Weapon extends Equipment {
  kind;

  get imageUri() {
    return `${this.type}/${this.kind.toLowerCase()}/${this.slug}.png`;
  }

  get fullName() {
    return `${this.name} ${this.kind}`;
  }
}

export default Weapon;
