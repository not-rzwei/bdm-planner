import { expect } from "chai";
import Equipment from "../../src/objects/Equipment";

describe("Equipment.js", () => {
  it("return an object", () => {
    expect(Equipment).to.be.an("object");
  });

  it("type return armor", () => {
    var armor = Object.create(Equipment);
    armor.type = "armor";

    expect(armor.type).to.equal("armor");
  });

  it("return equipment full name", () => {
    var bhegArmor = Object.create(Equipment);
    bhegArmor.name = "Bheg's";
    bhegArmor.type = "Armor";

    expect(bhegArmor.fullName()).to.equal("Bheg's Armor");
  });
});
