<template>
  <div class="title">
    <pre class="sw-font sw-pre">{{ starWarsPreTitle }}</pre>
    <pre class="pre-title" ref="pre">{{ preTitle }}</pre>
    <hr class="hr-dark" ref="hr" />
    <h1 class="main-title md-font">{{ title }}</h1>
  </div>
</template>

<script>
import emiter from '../main';

export default {
  name: "Title",
  props: ['starWarsPreTitle', 'preTitle', 'title'],
  mounted() {
    emiter.on('change-theme-hr-title',  value => this.$refs.hr.classList.toggle(value));
    emiter.on('change-theme-pre-title',  value => this.$refs.pre.classList.toggle(value));
  }
};
</script>

<style>
.title {
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  justify-content: center;
  align-items: center;
  width: 17.4rem;
  margin: 0 auto;
}

.sw-pre {
  font-size: 12pt;
  text-align: center;
  width: 15rem;
  margin: 0;
  position: relative;
  top: 1.6rem;
}

.pre-title {
  position: relative;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  width: 2rem;
  height: 1rem;
  font-size: 12pt;
  background-color: var(--main-bg-color);
  z-index: 2;
  font-weight: 600;
  top: 1.4rem;
  transition: 0.2s;
}

.hr-dark {
  position: relative;
  top: 0.6rem;
  width: 15rem;
  z-index: 1;
}
.hr-light {
  border-color: var(--main-bg-color);
}

.pre-title-light {
  background-color: var(--main-font-color);
  transition: 0.2s;
}

.main-title {
  font-size: 40pt;
  margin: 0 auto;
  text-align: center;
  width: 15rem;
}
</style>