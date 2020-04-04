import { expect } from "chai";
import Equipment from "../../src/objects/Equipment";

describe("Equipment.js", () => {
  it("create equipment instance", () => {
    expect(new Equipment()).to.an("object");
  });
});
