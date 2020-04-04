<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
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
  overflow: hidden;
}
</style>