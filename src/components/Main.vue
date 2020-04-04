<template>
  <main>
    <b-container fluid="xl" class="class container">
      <b-row class="equipment">
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
      <b-row class="stats">
        AP DP
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

.slot {
  display: inline-block;
  width: 64px;
  height: 64px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.5);
}

.slot.unused {
  border-radius: 0;
  margin: 0 1rem 1rem 0;
}
</style>
