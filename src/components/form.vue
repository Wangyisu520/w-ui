<template>
  <div class="w-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  },
  data () {
    return {

    }
  }
}
</script>
