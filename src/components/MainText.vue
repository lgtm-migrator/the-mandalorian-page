<template>
  <main class="main-text">
    <div v-for="item in content.data" :key="item.title">
      <header>
        <h2 :id="item.href" class="md-font all-title">
          {{ item.title }}
        </h2>
      </header>
      <section>
        <article id="article">
          <div v-if="checkArray(item.text)">
            <p class="p-article" v-for="el in item.text" :key="el">
              {{ el }}
            </p>
          </div>
          <p class="p-article" v-else>
            {{ item.text }}
          </p>
        </article>
      </section>
    </div>
    <footer>
      <h3 class="source" ref="source">
        Fonte:
        <a href="https://pt.wikipedia.org/wiki/The_Mandalorian" target="__blank"
          > Wikipedia</a
        >
      </h3>
    </footer>
  </main>
</template>

<script>
import emiter from '../main.js';
import { main } from "../constants.js";

export default {
  name: "MainText",
  data: function () {
    return {
      content: main,
    };
  },
  methods: {
    checkArray(arr) {
      return typeof arr == "object";
    },
  },
  mounted() {
    emiter.on('change-theme-source', () =>
      this.$refs.source.classList.toggle('source-light')
    );
  }
};
</script>

<style>
.main-text {
  padding: 2rem;
}

.p-article {
  font-family: "Fira Sans", sans-serif;
  font-size: 16pt;
  text-align: justify;
  background-color: #ffefd0;
  color: var(--main-bg-color);
  padding: 1.5rem;
  border-radius: 50px 0 50px 0;
  border: 1px solid var(--main-bg-color);
}

.all-title {
  padding-top: 70px;
  font-size: 40pt;
  text-align: center;
}

.source {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.source > a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--main-font-color);
}

.source-light > a {
  color: var(--main-bg-color);
}
</style>