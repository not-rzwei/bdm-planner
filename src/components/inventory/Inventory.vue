<template>
  <b-col cols="5" class="inventory">
    <b-card no-body>
      <b-tabs pills card>
        <b-tab
          :title="type[0].toUpperCase() + type.slice(1)"
          v-for="type in ['weapons', 'armors']"
          :key="type"
        >
          <template v-for="equip in myself[type]">
            <Equipment
              :equip="equip"
              :key="equip.id"
              @click.native="selectItem(equip)"
              :tooltip="true"
            />
          </template>
        </b-tab>

        <b-tab title="Accessory">TBA</b-tab>
      </b-tabs>
    </b-card>

    <EquipmentModal :id="modal_id" :equip="selected" :ok="didEquip" />
  </b-col>
</template>

<script>
import Equipment from "@/components/inventory/Equipment.vue";
import EquipmentModal from "@/components/inventory/EquipmentModal.vue";

export default {
  name: "Inventory",
  components: {
    Equipment,
    EquipmentModal
  },
  data: function() {
    return {
      selected: "",
      myself: this,
      modal_id: "inventory-modal"
    };
  },
  computed: {
    weapons: function() {
      var weapons = this.filterEquip(["mainhand", "offhand"]);

      weapons.map(eq => {
        const klass = this.$root.BDMP.class;
        const kind = eq.type == "mainhand" ? klass.mainhand : klass.offhand;

        eq.kind = kind;
        return eq;
      });

      return weapons;
    },
    armors: function() {
      return this.filterEquip(["armor", "helmet", "gloves", "shoes"]);
    }
  },
  methods: {
    filterEquip: function(filters) {
      return this.$root.BDMP.equipmentList.filter(function(eq) {
        return filters.includes(eq.type);
      });
    },
    selectItem: function(equip) {
      this.selected = equip;
      this.$bvModal.show(this.modal_id);
    },
    didEquip: function() {
      this.$root.BDMP.useEquip(this.selected.id);
      this.selected = "";
      this.$bvModal.hide(this.modal_id);
    }
  }
};
</script>

<style scoped>
.inventory .equipment {
  margin: 0.5rem;
}

.tabs a {
  text-transform: capitalize;
}
</style>
