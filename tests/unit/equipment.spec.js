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
    var bhegGloves = new Equipment();
    bhegGloves.name = "Bheg's";
    bhegGloves.type = "Gloves";

    expect(bhegGloves.fullName).to.equal("Bheg's Gloves");
  });

  it("return enhancement level", () => {
    var kzarka = new Equipment();
    kzarka.stats.baseAP = 135;
    kzarka.type = "mainhand";
    kzarka.grade = "red";

    expect(kzarka.enhancement.current).to.equal(0);

    kzarka.setEnhancement(5);
    expect(kzarka.enhancement.current).to.equal(5);
  });

  it("return 484 AP for +40 kzarka", () => {
    var kzarka = new Equipment();
    kzarka.stats.baseAP = 135;
    kzarka.type = "mainhand";
    kzarka.grade = "red";

    kzarka.setEnhancement(40);
    expect(kzarka.stats.ap).to.equal(484);
  });

  it("return 213 AP for +10 and 158 for +3 kzarka", () => {
    var kzarka = new Equipment();
    kzarka.stats.baseAP = 135;
    kzarka.type = "mainhand";
    kzarka.grade = "red";

    kzarka.setEnhancement(3);
    expect(kzarka.stats.ap).to.equal(158);

    kzarka.setEnhancement(10);
    expect(kzarka.stats.ap).to.equal(213);
  });

  it("return 167 DP for +10 red nose", () => {
    var rednose = new Equipment();
    rednose.stats.baseDP = 111;
    rednose.type = "armor";
    rednose.grade = "red";

    rednose.setEnhancement(10);
    expect(rednose.stats.dp).to.equal(167);
  });

  it("return 133 AP and 54 DP for +10 nouver", () => {
    var nouver = new Equipment();
    nouver.stats.baseAP = 84;
    nouver.stats.baseDP = 38;
    nouver.type = "offhand";
    nouver.grade = "red";

    nouver.setEnhancement(10);
    expect(nouver.stats.ap).to.equal(133);
    expect(nouver.stats.dp).to.equal(54);
  });
});
