<template>
  <nav class="menu colors-default">
    <div class="theme">
      <img
        class="color-theme"
        ref="icon"
        :src="iconSetTheme"
        @click="setTheme"
      />
    </div>
    <ul class="menu-itens">
      <li v-for="item in itens.data" :key="item.item">
        <a class="menu-link md-font colors-default" :href="item.href">{{
          item.item
        }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {
  hrLight,
  iconSetTheme,
  lightTheme,
  navigation,
  preLight,
  rotateIcon,
  sourceLight
} from "../constants.js";
import emiter from "../main";

export default {
  name: "MenuItens",
  data: function () {
    return {
      iconSetTheme,
      itens: navigation,
      lightTheme,
      hrLight,
      preLight,
      rotateIcon,
      sourceLight,
    };
  },
  methods: {
    setTheme() {
      this.$refs.icon.classList.toggle(this.rotateIcon);
      emiter.emit("change-theme-app", this.lightTheme);
      emiter.emit("change-theme-hr-title", this.hrLight);
      emiter.emit("change-theme-pre-title", this.preLight);
      emiter.emit("change-theme-source", this.sourceLight)
    },
  },
};
</script>

<style>
.colors-default {
  color: var(--main-font-color);
  background-color: var(--main-bg-color);
  transition: 0.2s;
}

.colors-light {
  color: var(--main-bg-color);
  background-color: var(--main-font-color);
  transition: 0.2s;
}

.rotate {
  transform: rotate(180deg);
  transition: 0.2s;
}

.color-theme {
  width: 20px;
  height: 20px;
  background-color: var(--main-font-color);
  border-radius: 10px;
  transition: 0.2s;
}

.theme {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 1rem 0.2rem;
}

nav {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
}

.menu-itens {
  display: var(--flex-display);
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  list-style: none;
  padding: 0 4rem;
  margin: 0.3rem;
}

.menu-link {
  text-decoration: none;
  font-size: 18pt;
  padding: 0;
}

.menu-link:hover {
  color: #b6b6b6;
  text-decoration: overline;
  transition: 1s;
}
</style>