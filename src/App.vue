<template>
  <div id="app">
    <p v-line-clamp:20="1">
      Some long text that needs to be truncated to a fixed 
      number, which is 2 in this case. And if the browser 
      doesn't support `-webkit-line-clamp`, then a 
      line-height of 20px is going to be used in order to 
      truncate this text, thus calculating its max-height.
    </p>
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
