import { expect } from "chai";
// import Equipment from "../../src/objects/Equipment";
// import EquipmentList from "../../src/objects/EquipmentList";
import BDMP from "../../src/objects/BDMP";

describe("BDMP.js", () => {
  it("return an array of equipment", () => {
    expect(new BDMP().equipmentList).to.be.an("array");
  });
});
