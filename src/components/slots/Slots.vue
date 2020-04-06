<template>
  <b-col offset="5" cols="2" class="slots">
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
      <EquipmentSlot
        :equip="equipment[type]"
        :type="type"
        :key="type"
        @click.native="selectSlot(type)"
      />
    </template>

    <EquipmentSlot type="ring" />
    <EquipmentSlot type="necklace" />
    <EquipmentSlot type="belt" />
    <EquipmentSlot type="earring" />
    <EquipmentSlot type="invisible" />
    <EquipmentSlot type="bracelet" />
    <EquipmentSlot type="relic" />
    <EquipmentSlot type="alchemy" />

    <EquipmentModal :id="modal_id" :equip="selected" :ok="unequip" />
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
      selected: "",
      modal_id: "slot-modal"
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
      this.$bvModal.show(this.modal_id);
    },
    unequip: function() {
      this.$root.BDMP.removeEquip(this.selected);
      this.$bvModal.hide(this.modal_id);
      this.selected = "";
    }
  }
};
</script>

.<style scoped>
.slots .slot {
  margin: 0.25rem;
}
</style>
