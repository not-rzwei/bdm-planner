<template>
  <b-col offset="5" cols="2" class="slots text-right">
    <EquipmentSlot :equip="equipment.mainhand" type="mainhand" />
    <EquipmentSlot :equip="equipment.offhand" type="offhand" />
    <EquipmentSlot :equip="equipment.helmet" type="helmet" />
    <EquipmentSlot :equip="equipment.armor" type="armor" />
    <EquipmentSlot :equip="equipment.gloves" type="gloves" />
    <EquipmentSlot :equip="equipment.shoes" type="shoes" />
    <EquipmentSlot type="ring" />
    <EquipmentSlot type="necklace" />
    <EquipmentSlot type="belt" />
    <EquipmentSlot type="earring" />
    <EquipmentSlot type="invisible" />
    <EquipmentSlot type="bracelet" />
    <EquipmentSlot type="relic" />
    <EquipmentSlot type="alchemy" />
  </b-col>
</template>

<script>
import EquipmentSlot from "@/components/slots/EquipmentSlot.vue";

export default {
  name: "Slots",
  components: {
    EquipmentSlot
  },
  computed: {
    equipment: function() {
      return this.$root.BDMP.equipment;
    }
  }
};
</script>

.<style scoped>
.slots .slot {
  margin: 0.25rem;
}
</style>
