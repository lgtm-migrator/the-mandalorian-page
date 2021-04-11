<template>
  <header>
    <nav-menu></nav-menu>
    <main-title star-wars-pre-title="star wars" pre-title="THE" title="Mandalorian"></main-title>
    <img :src="mainImage" />
  </header>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import MainTitle from "./MainTitle.vue";

export default {
  name: "Header",
  components: {
    NavMenu,
    MainTitle,
  },
  data: function () {
    return {
      mainImage: process.env.VUE_APP_MAIN_IMAGE,
    };
  },
};
</script>

<style>
img {
  width: 100%;
}
</style>