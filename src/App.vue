<template>
  <div id="app">
    <input v-focus>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      isRed: true
    }
  },
  methods: {
    toggle() {
      this.isRed = !this.isRed;
    }
  }
}
</script>

<style>
#app {
  padding: 50px;
  margin: 0 auto;
  max-width: 600px;
}

.red, .green {
  height: 75px;
  margin-top: 50px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style>
