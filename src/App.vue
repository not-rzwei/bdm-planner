<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main
  }
};
</script>

<style>
html, body, #app {
  height: 100%;
}

#app {
  background: url(~@/assets/ranger_bg.jpg) no-repeat;
  background-size: cover;
}
</style>