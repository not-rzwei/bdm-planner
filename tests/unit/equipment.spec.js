import { expect } from "chai";
import Equipment from "../../src/objects/Equipment";
import EquipmentList from "../../src/objects/EquipmentList";

describe("Equipment.js", () => {
  it("return an object", () => {
    expect(new Equipment()).to.be.an("object");
  });

  it("type return armor", () => {
    var armor = new Equipment();
    armor.type = "armor";

    expect(armor.type).to.equal("armor");
  });

  it("return equipment full name", () => {
    var bhegArmor = new Equipment();
    bhegArmor.name = "Bheg's";
    bhegArmor.type = "Armor";

    expect(bhegArmor.fullName).to.equal("Bheg's Armor");
  });
});

describe("EquipmentList.js", () => {
  it("return an array", () => {
    expect(EquipmentList).to.be.an("array");
  });
});
