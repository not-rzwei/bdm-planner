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

        <b-col offset="4" cols="3" class="slots">
          <b-row v-for="n in 5" :key="n" align-h="end">
            <b-col cols="4">
              <div class="slot used"></div>
            </b-col>
            <b-col>
              <div class="slot used"></div>
            </b-col>
          </b-row>
        </b-col>

        <b-col cols="5" class="items">
          <b-card no-body>
            <b-tabs pills card>
              <b-tab title="Weapon" active>
                <div class="slot item unused" v-for="n in 15" :key="n"></div>
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
export default {
  name: "Main",
};
</script>

<style scoped>
main {
  padding: 4rem 0;
}

.slots .row {
  margin-bottom: 1rem;
}

.class-image {
  position: absolute;
  top: 0;
  left: -200px;
  z-index: 0;
}

.slot {
  display: inline-block;
  width: 64px;
  height: 64px;
  background: #ddd;
  border-radius: 50%;
  border: 2px solid #999;
}

.slot.used {
  background-image: url(~@/assets/placeholders/armor.png);
  background-position: center;
}

.slot.unused {
  border-radius: 0;
  margin: 0 1rem 1rem 0;
}

.stats {
  margin-top: 4rem;
  background: red;
  position: relative;
  z-index: 2;
  height: 100px;
}
</style>
