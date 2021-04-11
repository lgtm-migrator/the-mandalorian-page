<template>
  <div id="app" ref="app" class="colors-default">
    <header-page></header-page>
    <main-text ></main-text>
  </div>
</template>

<script>
import HeaderPage from "./components/HeaderPage.vue";
import MainText from './components/MainText.vue';
import emiter from "./main";

export default {
  name: "app",
  components: {
    HeaderPage,
    MainText,
  },
  mounted() {
    emiter.on("change-theme-app", (value) =>
      this.$refs.app.classList.toggle(value)
    );
  },
};
</script>

<style>
:root {
  --main-font-color: #e6e6e6;
  --main-bg-color: #303030;
  --default-width: 300px;
  --flex-display: flex;
}

@font-face {
  font-family: "The Mandalorian";
  src: url(./fonts/mandalore.ttf);
}

@font-face {
  font-family: "Star Wars";
  src: url(./fonts/starjedi.ttf);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  box-sizing: border-box;
}

#app {
  display: var(--flex-display);
  flex-direction: column;
  align-items: center;
}

.md-font {
  font-family: "The Mandalorian";
}

.sw-font {
  font-family: "Star Wars";
}
</style>
