import { expect } from "chai";
import Equipment from "../../src/objects/Equipment";

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

  it("return enhancement level", () => {
    var kzarka = new Equipment();
    kzarka.stats.ap = 135;
    kzarka.type = "mainhand";
    kzarka.grade = "red";

    expect(kzarka.enhancement.current).to.equal(0);

    kzarka.setEnhancement(5);
    expect(kzarka.enhancement.current).to.equal(5);
  });

  it("return 484 CP for +40 kzarka", () => {
    var kzarka = new Equipment();
    kzarka.stats.ap = 135;
    kzarka.type = "mainhand";
    kzarka.grade = "red";

    kzarka.setEnhancement(40);
    expect(kzarka.stats.ap).to.equal(484);
  });
});
