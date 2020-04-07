<template>
  <b-modal :id="id" :title="equip.fullName" @ok="ok">
    <template v-if="equip !== ''">
      <div class="d-block text-center">
        <div class="container">
          <b-row>
            <b-col>
              <Equipment :equip="equip" />
            </b-col>
          </b-row>
          <b-row class="m-2">
            <b-col>
              <span v-if="equip.stats.ap"
                >Attack (AP) {{ equip.stats.ap }}<br
              /></span>

              <span v-if="equip.stats.dp"
                >Defense (DP) {{ equip.stats.dp }}<br
              /></span>

              <span>Enhancement +{{ enhanceLevel }}</span>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-input-group
                prepend="0"
                :append="String(equip.enhancement.max)"
                class="px-4 my-3"
              >
                <b-form-input
                  type="range"
                  min="0"
                  v-model="enhanceLevel"
                  :max="equip.enhancement.max"
                ></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
        </div>
      </div>
    </template>

    <template v-slot:modal-footer>
      <b-button size="lg" @click="ok()" v-if="!equip.bound">
        Equip
      </b-button>
      <b-button size="lg" variant="danger" @click="ok()" v-else>
        Unequip
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import Equipment from "@/components/inventory/Equipment.vue";

export default {
  name: "EquipmentModal",
  components: {
    Equipment
  },
  props: ["id", "equip", "ok"],
  computed: {
    enhanceLevel: {
      get: function() {
        return this.equip.enhancement.current;
      },
      set: function(level) {
        this.equip.enhancement.current = level;
        this.equip.setEnhancement(Number(level));
      }
    }
  }
};
</script>

<style scoped>
img {
  width: 96px;
  margin: 0 auto;
}
</style>
