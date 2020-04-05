<template>
  <div class="equipment" :class="type" :id="`eq${equip.id}`">
    <img class="mw-100 mh-100" :src="getImage" />

    <b-popover :target="`eq${equip.id}`" triggers="hover" placement="top">
      <template v-slot:title>{{ equip.name }} {{ equip.type }}</template>
      <div class="status-hover">
        <span v-if="equip.stats.ap">AP: {{ equip.stats.ap }}</span>
        <span v-if="equip.stats.dp">DP: {{ equip.stats.dp }}</span>
      </div>
    </b-popover>
  </div>
</template>

<script>
export default {
  name: "Equipment",
  props: {
    type: String,
    equip: Object
  },
  computed: {
    getImage: function() {
      return require(`@/assets/equipments/${this.equip.id}.png`);
    }
  }
};
</script>

<style scoped>
.equipment {
  display: inline-block;
  width: 64px;
  height: 64px;
  background: #ddd;
  background-position: center;
  cursor: pointer;
}

.status-hover {
  text-align: center;
}

.status-hover span {
  margin: 0 1rem;
}
</style>
