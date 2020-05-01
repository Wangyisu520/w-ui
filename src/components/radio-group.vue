<template>
  <div class='w-radio-group'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'WRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  },
  data () {
    return {

    }
  }
}
</script>
