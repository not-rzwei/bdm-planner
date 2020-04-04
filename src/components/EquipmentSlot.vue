<template>
  <div class="slot" :class="type"></div>
</template>

<script>
export default {
  name: "EquipmentSlot",
  props: {
    type: String
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
