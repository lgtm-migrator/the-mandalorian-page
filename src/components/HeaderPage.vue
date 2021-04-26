<template>
  <header>
    <nav-menu></nav-menu>
    <main-title
      star-wars-pre-title="star wars"
      pre-title="THE"
      title="Mandalorian"
    ></main-title>
    <img :src="mainImage" />
  </header>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import MainTitle from "./MainTitle.vue";
import { mainImage } from "../constants.js";

export default {
  name: "Header",
  components: {
    NavMenu,
    MainTitle,
  },
  data: function () {
    return {
      mainImage,
    };
  },
};
</script>

<style>
header {
  width: 100%;
}

img {
  width: 100%;
}
</style>