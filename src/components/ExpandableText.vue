<template>
  <div class="expandable-text">
    <p v-line-clamp:[lineHeight]="maxLines">
      <slot name="content"></slot>
    </p>
    <a href="#" @click="toggle">
      <slot name="toggler"></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ExpandableText',
  props: {
    lines: {
      type: Number,
      default: () => 1
    },
    lineHeight: {
      type: Number,
      default: () => 20
    }
  },
  data() {
    return {
      maxLines: 1,
    }
  },
  created() {
    this.maxLines = this.lines;
  },
  methods: {
    toggle() {
      this.maxLines = this.maxLines === 999 ? this.lines : 999;
      this.$emit('toggled');
    }
  }
}
</script>