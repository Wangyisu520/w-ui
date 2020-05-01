<template>
  <div id="app">
    <div>
      <WButton
        type="primary"
        @click="handleClick"
      >弹出</WButton>
    </div>
    <WDialog
      :visible.sync="visible"
      title="弹出框"
      width='300px'
    ></WDialog>
    <WInput
      v-model="val"
      type="password"
      showPassword
    />

    <WSwitch
      v-model="active"
      activeColor="skyblue"
      inactiveColor="pink"
    ></WSwitch>
    <br />

    <br>
    <WRadioGroup v-model="gender">
      <WRadio label="1">男</WRadio>
      <WRadio label="0">女</WRadio>
    </WRadioGroup>
    <br>
    <WCheckbox
      v-model="checkActive"
      label="hh"
    >哈哈</WCheckbox>
    <br>
    <WCheckGroup v-model="fruits">
      <WCheckbox label="苹果">苹果</WCheckbox>
      <WCheckbox label="梨">梨</WCheckbox>
      <WCheckbox label="草莓">草莓</WCheckbox>
    </WCheckGroup>
    <br>

    <WForm :model="formModel" label-width='80px'>
      <WFormItem label="用户名">
        <WInput
          placeholder="请输入"
          v-model="formModel.name"
        />
      </WFormItem>
      <WFormItem label="选择">
        <WSwitch
          v-model="formModel.switch"
          activeColor="skyblue"
          inactiveColor="pink"
        ></WSwitch>
      </WFormItem>
    </WForm>
    <br>
    <w-input placeholder="猜猜我是谁"></w-input>
  </div>

</template>

<script>
export default {
  data () {
    return {
      visible: false,
      val: '',
      active: true,
      gender: '1',
      checkActive: false,
      fruits: [],
      formModel: {
        name: '',
        switch: false
      }
    }
  },
  methods: {
    handleClick (e) {
      this.visible = true
    }
  }
}
</script>

<style lang="scss">
</style>
