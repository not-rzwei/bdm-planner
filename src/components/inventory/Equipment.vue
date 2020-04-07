<template>
  <div class="equipment" :class="type" :id="`eq${equip.id}`">
    <img class="mw-100 mh-100" :src="getImage" />

    <b-popover :target="`eq${equip.id}`" triggers="hover" placement="top" v-if="tooltip">
      <template v-slot:title>{{ equip.fullName }}</template>
      <div class="status-hover text-center">
        <span v-if="equip.stats.ap"> AP: {{ equip.stats.ap }}<br /> </span>
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
    equip: Object,
    tooltip: Boolean
  },
  computed: {
    getImage: function() {
      const basePath = process.env.BASE_URL;
      return `${basePath}equipments/${this.equip.imageUri}`;
    }
  }
};
</script>

<style scoped>
.equipment {
  display: inline-block;
  height: 64px;
  background-position: center;
  cursor: pointer;
}

.status-hover {
  text-align: center;
}

.status-hover span {
  margin: 0 1rem;
}

.slot img {
  cursor: pointer;
  border-radius: 50%;
}
.slot.equipment {
  background: none;
}
</style>
