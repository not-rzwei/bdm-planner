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
            />
            <b-popover
              :target="`eq${equip.id}`"
              triggers="hover"
              placement="top"
              :key="equip.id + 1000"
            >
              <template v-slot:title>{{ equip.fullName }}</template>
              <div class="status-hover">
                <span v-if="equip.stats.ap">AP: {{ equip.stats.ap }}</span>
                <span v-if="equip.stats.dp">DP: {{ equip.stats.dp }}</span>
              </div>
            </b-popover>
          </template>
        </b-tab>

        <b-tab title="Accessory">TBA</b-tab>
      </b-tabs>
    </b-card>

    <EquipmentModal id="inventory-modal" :equip="selected" :ok="didEquip" />
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
      myself: this
    };
  },
  computed: {
    weapons: function() {
      return this.filterEquip(["mainhand", "offhand"]);
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
      this.$bvModal.show("inventory-modal");
    },
    didEquip: function() {
      this.$root.BDMP.useEquip(this.selected.id);
      this.makeToast();
      this.selected = "";
    },
    makeToast: function() {
      this.$bvToast.toast(`Equipped ${this.selected.fullName}`, {
        title: "Notification",
        autoHideDelay: 3000,
        solid: true
      });
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
