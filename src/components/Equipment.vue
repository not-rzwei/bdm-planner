<template>
  <div class="equipment" :class="type">
    <img class="mw-100 mh-100" :src="getImage" />
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
</style>
