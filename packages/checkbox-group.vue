<template>
  <div class="w-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WCheckGroup',
  props: {
    value: Array
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>
