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

        <b-col offset="5" cols="2" class="slots text-right">
          <EquipmentSlot type="mainhand" />
          <EquipmentSlot type="offhand" />
          <EquipmentSlot type="helmet" />
          <EquipmentSlot type="armor" />
          <EquipmentSlot type="gloves" />
          <EquipmentSlot type="shoes" />
          <EquipmentSlot type="ring" />
          <EquipmentSlot type="necklace" />
          <EquipmentSlot type="belt" />
          <EquipmentSlot type="earring" />
          <EquipmentSlot type="invisible" />
          <EquipmentSlot type="bracelet" />
          <EquipmentSlot type="relic" />
          <EquipmentSlot type="alchemy" />
        </b-col>

        <b-col cols="5" class="inventory">
          <b-card no-body>
            <b-tabs pills card>
              <b-tab title="Weapon" active>
                <Equipment v-for="n in 15" :key="n" />
              </b-tab>
              <b-tab title="Armor">Armors</b-tab>
              <b-tab title="Accessory">Accessories</b-tab>
            </b-tabs>
          </b-card>
        </b-col>
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
import EquipmentSlot from "@/components/EquipmentSlot.vue";
import Equipment from "@/components/Equipment.vue";

export default {
  name: "Main",
  components: {
    EquipmentSlot,
    Equipment
  }
};
</script>

<style scoped>
main {
  padding: 4rem 0;
}

.slots .slot {
  margin: 0.25rem;
}

.inventory .equipment {
  margin: 0.5rem;
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
