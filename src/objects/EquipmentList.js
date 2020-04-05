import mainhand from "../data/equipments/mainhand.json";
import offhand from "../data/equipments/offhand.json";
import helmet from "../data/equipments/helmet.json";
import armor from "../data/equipments/armor.json";
import gloves from "../data/equipments/gloves.json";
import shoes from "../data/equipments/shoes.json";

var EquipmentList = Array();

EquipmentList = EquipmentList.concat(mainhand)
  .concat(offhand)
  .concat(helmet)
  .concat(armor)
  .concat(gloves)
  .concat(shoes);

export default EquipmentList;
