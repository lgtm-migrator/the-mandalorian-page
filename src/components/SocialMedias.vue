<template>
  <ul class="social-media-list">
    <li
      class="social-media-item"
      v-for="socialMedia in socialMedias.data"
      :key="socialMedia.alt"
    >
      <a :href="socialMedia.url" target="_blank"
        ><img
          class="social-media-image"
          :src="socialMedia.img"
          :alt="socialMedia.alt"
      /></a>
    </li>
  </ul>
</template>

<script>
import { socialMedias } from "../constants.js";

export default {
  name: "SocialMedias",
  data: function () {
    return {
      socialMedias,
    };
  },
};
</script>

<style>
.social-media-list {
  display: inline-flex;
  justify-content: space-between;
  list-style: none;
  width: 150px;
  padding: 0;
  margin: 0;
}

.social-media-image {
  width: 30px;
}
</style>