<template>
  <div class="expandable-text">
    <slot name="content"></slot>
    <slot name="toggler"></slot>
  </div>
</template>

<script>
export default {
  name: 'ExpandableText'
}
</script>