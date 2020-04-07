import EquipmentList from "./EquipmentList";
import Equipment from "./Equipment";
import Weapon from "./Weapon";
import Class from "./Class";

const BDMP = class {
  class = new Class("Ranger");

  equipmentList = EquipmentList;
  equipment = {
    mainhand: new Weapon(),
    offhand: new Weapon(),
    helmet: new Equipment(),
    armor: new Equipment(),
    gloves: new Equipment(),
    shoes: new Equipment()
  };

  useEquip(id) {
    var equip = this.findEquip(id);

    if (equip) {
      equip.bound = true;
      this.equipment[equip.type] = equip;
      this.removeFromList(id);

      return true;
    }

    return false;
  }

  removeEquip(equip) {
    equip.bound = false;
    this.addToList(equip);
    this.equipment[equip.type] = new Equipment();
  }

  addToList(equip) {
    var addedList = this.equipmentList;

    addedList.push(equip);
    this.equipmentList = addedList;
  }

  removeFromList(id) {
    var list = this.equipmentList;
    var removedList = list.filter(eq => eq.id != id);

    this.equipmentList = removedList;
  }

  findEquip(id) {
    return this.equipmentList.find(eq => eq.id == id);
  }

  get stats() {
    return {
      cp: this.equipmentsCP()
    };
  }

  equipmentsCP() {
    const cp = Object.values(this.equipment).reduce(
      (acc, cur) => {
        acc.ap += cur.stats.ap;
        acc.dp += cur.stats.dp;

        return acc;
      },
      { ap: 0, dp: 0 }
    );

    return {
      total: cp.ap + cp.dp,
      ap: cp.ap,
      dp: cp.dp
    };
  }
};

export default BDMP;
