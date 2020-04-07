<template>
  <b-col cols="5" class="inventory">
    <b-card no-body class="bg-dark text-light">
      <b-tabs pills content-class="p-3 content">
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
      return this.$root.BDMP.equipmentList
        .filter(function(eq) {
          return filters.includes(eq.type);
        })
        .sort((a, b) => {
          const gradePoint = {
            white: 0,
            green: 1,
            blue: 2,
            purple: 3,
            yellow: 4,
            orange: 5,
            red: 6
          };

          const gradeA = gradePoint[a.grade],
            gradeB = gradePoint[b.grade];

          return gradeB - gradeA || a.id - b.id;
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

.inventory >>> .content {
  /* max-height: 500px; */
  height: 500px;
  overflow-y: auto;
}

.inventory >>> .nav-pills {
  padding: 1rem;
  padding-bottom: 0;
}

.inventory >>> .nav-link.active {
  background-color: #28a745;
}

.inventory >>> .nav-item a {
  color: #f8f9fa;
}
</style>
