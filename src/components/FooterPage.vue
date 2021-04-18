<template>
  <footer>
    <h3 class="md-font">{{ developer }} - {{ getCurrentYear() }}</h3>
    <social-medias></social-medias>
  </footer>
</template>

<script>
import SocialMedias from "./SocialMedias.vue";

export default {
  name: "FooterPage",
  props: ["developer"],
  components: {
    SocialMedias,
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style>
.footer {
  display: var(--flex-display);
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}

.footer h3 {
  width: 100%;
  text-align: center;
  margin-top: 50px;
}
</style>