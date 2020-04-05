<template>
  <b-col offset="5" cols="2" class="slots text-right">
    <EquipmentSlot type="mainhand" />
    <EquipmentSlot type="offhand" />
    <EquipmentSlot type="helmet" />
    <EquipmentSlot type="armor" />
    <EquipmentSlot type="gloves" />
    <EquipmentSlot type="shoes" />
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
  }
};
</script>

.<style scoped>
.slots .slot {
  margin: 0.25rem;
}
</style>
