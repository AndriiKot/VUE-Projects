<template>
  <h2>Счётчик: {{ counter }}</h2>
  <button class="btn btn-danger" v-on:click="counter--">Уменьшить</button>
  <button class="btn btn-success" v-on:click="counter++">Увеличить</button>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    }
  }
</script>

