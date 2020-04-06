<template>
  <b-row class="stats bg-dark text-light " no-gutters align-v="center">
    <b-col>
      <img src="@/assets/ranger_icon.png" />
    </b-col>
    <b-col>
      <small>Combat (CP)</small>
      <p class="lead m-0">{{ stats.cp.total }}</p>
    </b-col>
    <b-col>
      <small>Attack (AP)</small>
      <p class="lead m-0">{{ stats.cp.ap }}</p>
    </b-col>
    <b-col>
      <small>Defense (DP)</small>
      <p class="lead m-0">{{ stats.cp.dp }}</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Stats",
  computed: {
    stats: function() {
      return this.$root.BDMP.stats;
    }
  }
};
</script>

<style scoped>
.stats {
  margin-top: 4rem;
  background: red;
  position: relative;
  z-index: 2;
  height: 100px;
}
</style>
