<template>
  <h2>Счётчик: {{ counter }}</h2>
  <p>max: 10, mix: 0</p>
  <button class="btn btn-danger" v-on:click="minus">Уменьшить</button>
  <button class="btn btn-success" v-on:click="plus">Увеличить</button>
  <hr />
  <input type="text" v-bind:placeholder="clue" />
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      clue: "Введите текст",
    };
  },
  methods: {
    plus() {
      if (this.counter === 10) {
        return;
      }
      this.counter += 1;
    },
    minus() {
      if (this.counter === 0) {
        return;
      }
      this.counter -= 1;
    },
  },
};
</script>
