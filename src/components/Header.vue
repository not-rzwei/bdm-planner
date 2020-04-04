<template>
  <header>
    <!-- Image and text -->
    <b-navbar variant="dark" type="dark">
      <b-container fluid="xl">
        <b-navbar-brand href="/">
          <img
            src="@/assets/bdm_logo.png"
            class="d-inline-block align-top"
            alt="Black Desert Mobile Planner"
          />
        </b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">GitHub</b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.navbar-brand img {
  max-height: 52px;
}
</style>
