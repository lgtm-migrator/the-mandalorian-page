<template>
  <div id="app" ref="app" class="colors-default">
    <header-page></header-page>
    <main-text></main-text>
    <characters title="Personagens"></characters>
    <facebook-plugin link="The Mandalorian Page"></facebook-plugin>
    <footer-page developer="Cristian Penteado"></footer-page>
  </div>
</template>

<script>
import Characters from "./components/Characters.vue";
import FacebookPlugin from "./components/FacebookPlugin.vue";
import FooterPage from "./components/FooterPage.vue";
import HeaderPage from "./components/HeaderPage.vue";
import MainText from "./components/MainText.vue";
import emiter from "./main";

export default {
  name: "app",
  components: {
    Characters,
    FacebookPlugin,
    FooterPage,
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


@media screen and (max-width: 1281px) {
  #characters {
    column-gap: 4rem;
  }
}

@media screen and (max-width: 1024px) {
  .menu-itens {
    padding: 0 5rem;
  }
  #characters {
    column-gap: 9rem;
  }
  #characters {
    grid-template-columns: var(--default-width) var(--default-width);
  }
}

@media screen and (max-width: 768px) {
.menu-itens {
    padding: 0 1.5rem;
  }

  .menu-link {
    font-size: 16pt;
  }
  
  #characters {
    grid-template-columns: var(--default-width) var(--default-width);
    column-gap: 4rem;
  }
}

@media screen and (max-width: 700px) {
  #characters {
    grid-template-columns: var(--default-width);
  }
  .characters {
    display: grid;
    text-align: center;
    justify-content: center;
  }
}
</style>
