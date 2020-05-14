<template>
  <div id="app">
    <expandable-text 
      :lines="3"
      @toggled="isExpanded = !isExpanded"
    >
      <template #content>
        <p>
          Some long text that needs to be truncated to a fixed 
          number, which is 2 in this case. And if the browser 
          doesn't support `-webkit-line-clamp`, then a 
          line-height of 20px is going to be used in order to 
          truncate this text, thus calculating its max-height.
          Some long text that needs to be truncated to a fixed 
          number, which is 2 in this case. And if the browser 
          doesn't support `-webkit-line-clamp`, then a 
          line-height of 20px is going to be used in order to 
          truncate this text, thus calculating its max-height.
          Some long text that needs to be truncated to a fixed 
          number, which is 2 in this case. And if the browser 
          doesn't support `-webkit-line-clamp`, then a 
          line-height of 20px is going to be used in order to 
          truncate this text, thus calculating its max-height.
        </p>
      </template>
      <template #toggler>
        <span href="#" сlass="toggler">
          {{ isExpanded ? 'Свернуть' : 'Развернуть' }}
        </span>
      </template>
    </expandable-text>
  </div>
</template>

<script>
import ExpandableText from '@/components/ExpandableText';

export default {
  name: 'App',
  components: {
    ExpandableText
  },
  data(){
    return {
      isRed: true,
      isExpanded: false
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

.toggler {
  color: red;
}

p {
  padding: 0;
  margin: 0;
}
</style>
