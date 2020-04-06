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

      <Stats />
    </b-container>
  </main>
</template>

<script>
import Slots from "@/components/slots/Slots.vue";
import Inventory from "@/components/inventory/Inventory.vue";
import Stats from "@/components/Stats.vue";

export default {
  name: "Main",
  components: {
    Slots,
    Inventory,
    Stats
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
</style>
