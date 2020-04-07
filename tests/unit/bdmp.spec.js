import { expect } from "chai";
import BDMP from "../../src/objects/BDMP";

describe("BDMP.js", () => {
  describe("Equipment test", () => {
    it("return an array of equipment", () => {
      expect(new BDMP().equipmentList).to.be.an("array");
    });

    it("return noir glove", () => {
      var bdmp = new BDMP();
      var noir = bdmp.equipmentList.find(eq => eq.id == 501);
      bdmp.useEquip(501);

      expect(bdmp.equipment.gloves).to.equal(noir);
    });

    it("return blank glove", () => {
      var bdmp = new BDMP();
      var noir = bdmp.equipmentList.find(eq => eq.id == 501);

      bdmp.useEquip(501);
      expect(bdmp.equipment.gloves).to.equal(noir);

      bdmp.removeEquip(noir);
      expect(bdmp.equipment.gloves).to.not.equal(noir);
    });
  });

  describe("Stats test", () => {
    it("return 135 CP when equip kzarka", () => {
      var bdmp = new BDMP();

      bdmp.useEquip(101);

      expect(bdmp.stats.cp.total).to.equal(135);
    });

    it("return 122 CP when equip nouver", () => {
      var bdmp = new BDMP();

      bdmp.useEquip(201);

      expect(bdmp.stats.cp.total).to.equal(122);
    });

    it("return 38 DP when equip nouver", () => {
      var bdmp = new BDMP();

      bdmp.useEquip(201);

      expect(bdmp.stats.cp.dp).to.equal(38);
    });

    it("return 257 CP when equip kzarka and nouver", () => {
      var bdmp = new BDMP();

      bdmp.useEquip(201);
      bdmp.useEquip(101);

      expect(bdmp.stats.cp.total).to.equal(257);
    });
  });
});
