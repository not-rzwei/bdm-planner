<template>
  <main>
    <b-container fluid="xl" class="class container">
      <b-row class="equipment position-relative">
        <div class="class-image">
          <img
            src="@/assets/ranger_img.png"
            class="mw-100 mh-100"
            alt="Class Image"
          />
        </div>

        <Slots />
        <Inventory />
      </b-row>

      <b-row class="stats bg-dark text-light " no-gutters align-v="center">
        <b-col>
          <img src="@/assets/ranger_icon.png" />
        </b-col>
        <b-col>
          <small>Combat (CP)</small>
          <p class="lead m-0">0</p>
        </b-col>
        <b-col>
          <small>Attack (AP)</small>
          <p class="lead m-0">0</p>
        </b-col>
        <b-col>
          <small>Defense (DP)</small>
          <p class="lead m-0">0</p>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import Slots from "@/components/Slots.vue";
import Inventory from "@/components/Inventory.vue";

export default {
  name: "Main",
  components: {
    Slots,
    Inventory
  }
};
</script>

<style scoped>
main {
  padding: 4rem 0;
}

.class-image {
  position: absolute;
  top: 0;
  left: -200px;
  z-index: 0;
}

.stats {
  margin-top: 4rem;
  background: red;
  position: relative;
  z-index: 2;
  height: 100px;
}
</style>
