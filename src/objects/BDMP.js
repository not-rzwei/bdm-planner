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
    var equip = this.equipmentList.find(eq => eq.id == id);

    if (equip) {
      this.equipment[equip.type] = equip;
      return true;
    }

    return false;
  }

  removeEquip(type) {
    this.equipment[type] = new Equipment({ type: type });
  }
}

export default BDMP;
