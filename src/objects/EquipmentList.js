import mainhand from "../data/equipments/mainhand.json";
import offhand from "../data/equipments/offhand.json";
import helmet from "../data/equipments/helmet.json";
import armor from "../data/equipments/armor.json";
import gloves from "../data/equipments/gloves.json";
import shoes from "../data/equipments/shoes.json";
import Equipment from "./Equipment";

var EquipmentList = Array();

EquipmentList = EquipmentList.concat(mainhand.map(eq => new Equipment(eq)))
  .concat(offhand.map(eq => new Equipment(eq)))
  .concat(helmet.map(eq => new Equipment(eq)))
  .concat(armor.map(eq => new Equipment(eq)))
  .concat(gloves.map(eq => new Equipment(eq)))
  .concat(shoes.map(eq => new Equipment(eq)));

export default EquipmentList;
