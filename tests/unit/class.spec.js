import { expect } from "chai";
import Class from "../../src/objects/Class";

describe("Class.js", () => {
  it("return class name", () => {
    var ranger = new Class("Ranger");

    expect(ranger.name).to.equal("Ranger");
  });

  it("return Staff main hand when class is witch", () => {
    var witch = new Class("Witch");

    expect(witch.mainhand).to.equal("Staff");
  });
});
