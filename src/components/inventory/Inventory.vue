<template>
  <b-col cols="5" class="inventory">
    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="Weapon" active>
          <template v-for="weapon in weapons">
            <Equipment
              :equip="weapon"
              :key="weapon.id"
              @click.native="selectItem(weapon)"
            />
          </template>
        </b-tab>
        <b-tab title="Armor">
          <template v-for="armor in armors">
            <Equipment
              :equip="armor"
              :key="armor.id"
              @click.native="selectItem(armor)"
            />
          </template>
        </b-tab>
        <b-tab title="Accessory">WIP</b-tab>
      </b-tabs>
    </b-card>

    <b-modal id="inventory-modal" :title="selected.name">
      <div class="d-block text-center">
        <h3></h3>
      </div>

      <template v-slot:modal-footer="{ ok }">
        <b-button size="md" variant="success" @click="ok()">
          Equip
        </b-button>
      </template>
    </b-modal>
  </b-col>
</template>

<script>
import Equipment from "@/components/inventory/Equipment.vue";

export default {
  name: "Inventory",
  components: {
    Equipment
  },
  data: function() {
    return {
      selected: ""
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
      return this.$BDMP.equipmentList.filter(function(eq) {
        return filters.includes(eq.type);
      });
    },
    selectItem: function(equip) {
      this.selected = equip;
      this.$bvModal.show("inventory-modal");
    }
  }
};
</script>

<style scoped>
.inventory .equipment {
  margin: 0.5rem;
}
</style>
