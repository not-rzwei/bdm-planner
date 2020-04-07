<template>
  <div class="slot" :class="[type, gradeClass]">
    <template v-if="equip != undefined && equip.id != 0">
      <template v-if="equip.enhancement.current > 0">
        <span class="lead text-light"> +{{ equip.enhancement.current }} </span>
      </template>

      <img :src="getImage" />
    </template>
  </div>
</template>

<script>
export default {
  name: "EquipmentSlot",
  props: {
    type: String,
    equip: Object
  },
  computed: {
    getImage: function() {
      return require(`@/assets/equipments/${this.equip.id}.png`);
    },
    gradeClass: function() {
      let equip = this.equip;
      return equip != undefined && equip.id != 0 ? equip.grade : "";
    }
  }
};
</script>

<style scoped>
.slot {
  display: inline-block;
  width: 64px;
  height: 64px;
  background: #ddd;
  border-radius: 50%;
  border: 2px solid #999;
  background-position: center;
  position: relative;
  vertical-align: middle;
}

.slot img {
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 50%;
}

.slot span {
  position: absolute;
  top: -4px;
  left: -8px;
  text-shadow: 0.75px 0 0 black, -0.75px 0 0 black, 0 0.75px 0 black,
    0 -0.75px 0 black;
}

.slot.red {
  border-color: #dc3545;
}

.slot.mainhand {
  background-image: url(~@/assets/placeholders/mainhand.png);
}

.slot.offhand {
  background-image: url(~@/assets/placeholders/offhand.png);
}

.slot.helmet {
  background-image: url(~@/assets/placeholders/helmet.png);
}

.slot.armor {
  background-image: url(~@/assets/placeholders/armor.png);
}

.slot.gloves {
  background-image: url(~@/assets/placeholders/gloves.png);
}

.slot.shoes {
  background-image: url(~@/assets/placeholders/shoes.png);
}

.slot.ring {
  background-image: url(~@/assets/placeholders/ring.png);
}

.slot.necklace {
  background-image: url(~@/assets/placeholders/necklace.png);
}

.slot.earring {
  background-image: url(~@/assets/placeholders/earring.png);
}

.slot.belt {
  background-image: url(~@/assets/placeholders/belt.png);
}
</style>
