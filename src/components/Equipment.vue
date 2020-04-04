<template>
    <div class="equipment" :class="type"></div>
</template>

<script>
export default {
    name: "Equipment",
    props: {
        type: String
    }
}
</script>

<style scoped>
.equipment {
  display: inline-block;
  width: 64px;
  height: 64px;
  background: #ddd;
  border: 2px solid #999;
  background-position: center;
}

</style>