import EquipmentList from "./EquipmentList";
import Equipment from "./Equipment";

class BDMP {
  equipmentList = EquipmentList;
  equipment = {
    mainhand: new Equipment({ type: "mainhand" }),
    offhand: new Equipment({ type: "helmet" }),
    helmet: new Equipment({ type: "helmet" }),
    armor: new Equipment({ type: "armor" }),
    gloves: new Equipment({ type: "gloves" }),
    shoes: new Equipment({ type: "shoes" })
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
}

export default BDMP;
