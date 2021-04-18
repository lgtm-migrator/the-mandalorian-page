<template>
  <section class="characters">
    <h2 id="title-characters" class="md-font all-title">{{ title }}</h2>
    <ul id="characters">
      <li
        v-for="character in characters.data"
        :key="character.name"
        class="character-item"
      >
        <figure>
          <a class="character-image" :href="character.url"
            ><img :src="character.url" :alt="character.name"
          /></a>
          <figcaption class="md-font">{{ character.name }}</figcaption>
        </figure>
      </li>
    </ul>
  </section>
</template>

<script>
import { characters } from "../constants.js";

export default {
  name: "Caracters",
  props: ["title"],
  data: function () {
    return {
      characters,
    };
  },
};
</script>

<style>
#title-characters {
  width: 100%;
}

#characters {
  display: grid;
  grid-template-columns: repeat(3, var(--default-width));
  column-gap: 6rem;
  align-items: center;
  padding: 0;
  margin: 0;
}

.character-item {
  display: var(--flex-display);
  flex-direction: column;
  align-items: center;
  width: var(--default-width);
  height: 350px;
  list-style: none;
}

figure {
  width: var(--default-width);
  margin: 0;
  padding: 0;
}

.character-image img {
  border-radius: 10px;
  border: 1px solid var(--main-font-color);
  transition: 0.5s;
}

.character-image img:hover {
  border: 0;
  transition: 0.5s;
}

figcaption {
  font-size: 24pt;
  text-align: center;
}
</style>