<template>
  <section class="fb-plugin">
    <div
      class="fb-page"
      data-href="https://www.facebook.com/the.mandalorian.page/"
      data-tabs="timeline"
      data-width="200"
      data-height="100"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/the.mandalorian.page/"
        class="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/the.mandalorian.page/">{{ link }}</a>
      </blockquote>
    </div>
  </section>
</template>

<script>
export default {
  name: "FacebookPlugin",
  props: ["link"],
};
</script>

<style>
.fb-plugin {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>