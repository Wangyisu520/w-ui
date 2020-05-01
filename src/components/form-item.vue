<template>
  <div class="w-form-item">
    <label
      :style="{width: this.Form.labelWidth}"
      class="w-form-item_label"
    >{{label}}</label>
    <div class="w-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form']
}
</script>

<style lang="scss" scoped>
.w-form-item {
  margin-bottom: 25px;
  .w-form-item_label {
    text-align: right;
    vertical-align: middle;
    font-size: 14px;
    float: left;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .w-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
