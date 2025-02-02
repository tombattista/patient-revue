<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HeaderBar from './components/HeaderBar/HeaderBar.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HeaderBar title="Vector" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: block;
}

header .wrapper {
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 10;
}

nav {
  display: inline-flex;
  width: 10rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
