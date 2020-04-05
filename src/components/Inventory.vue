<template>
  <b-col cols="5" class="inventory">
    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="Weapon" active>
          <Equipment
            v-for="weapon in weapons"
            :equip="weapon"
            :key="weapon.id"
          />
        </b-tab>
        <b-tab title="Armor">
          <Equipment v-for="armor in armors" :equip="armor" :key="armor.id" />
        </b-tab>
        <b-tab title="Accessory">WIP</b-tab>
      </b-tabs>
    </b-card>
  </b-col>
</template>

<script>
import Equipment from "@/components/Equipment.vue";

function filterEquip(filters, equips) {
  return equips.filter(function(eq) {
    return filters.includes(eq.type);
  });
}

export default {
  name: "Inventory",
  components: {
    Equipment
  },
  computed: {
    weapons: function() {
      return filterEquip(["mainhand", "offhand"], this.$BDMP.equipmentList);
    },
    armors: function() {
      return filterEquip(
        ["armor", "helmet", "gloves", "shoes"],
        this.$BDMP.equipmentList
      );
    }
  }
};
</script>

<style scoped>
.inventory .equipment {
  margin: 0.5rem;
}
</style>
