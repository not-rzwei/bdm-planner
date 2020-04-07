<template>
  <header>
    <b-navbar variant="dark" type="dark">
      <b-container fluid="xl">
        <b-navbar-brand href="/">
          BDM Planner
        </b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item href="https://github.com/rif2d/bdm-planner">
            GitHub
          </b-nav-item>
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
