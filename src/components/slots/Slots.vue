<template>
  <b-col offset="5" cols="2" class="slots text-right">
    <template
      v-for="type in [
        'mainhand',
        'offhand',
        'helmet',
        'armor',
        'gloves',
        'shoes'
      ]"
    >
      <EquipmentSlot :equip="equipment[type]" :type="type" :key="type" @click.native="selectSlot(type)" />
    </template>

    <EquipmentSlot type="ring" />
    <EquipmentSlot type="necklace" />
    <EquipmentSlot type="belt" />
    <EquipmentSlot type="earring" />
    <EquipmentSlot type="invisible" />
    <EquipmentSlot type="bracelet" />
    <EquipmentSlot type="relic" />
    <EquipmentSlot type="alchemy" />

    <EquipmentModal id="slot-modal" :equip="selected" :ok="unequip" />
  </b-col>
</template>

<script>
import EquipmentSlot from "@/components/slots/EquipmentSlot.vue";
import EquipmentModal from "@/components/inventory/EquipmentModal.vue";

export default {
  name: "Slots",
  components: {
    EquipmentSlot,
    EquipmentModal
  },
  data: function() {
    return {
      selected: ""
    };
  },
  computed: {
    equipment: function() {
      return this.$root.BDMP.equipment;
    }
  },
  methods: {
    selectSlot: function(type) {
      this.selected = this.equipment[type];
      this.$bvModal.show("slot-modal");
    },
    unequip: function() {
      console.log("UNEQUIPED");
    }
  }
};
</script>

.<style scoped>
.slots .slot {
  margin: 0.25rem;
}
</style>
