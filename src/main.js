import Vue from 'vue'
import App from './App.vue'
import WButton from './components/button.vue'
import WDialog from './components/dialog.vue'
import WInput from './components/input.vue'
import WSwitch from './components/switch.vue'
import WRadio from './components/radio.vue'
import WRadioGroup from './components/radio-group.vue'
import WCheckbox from './components/checkbox.vue'
import WCheckGroup from './components/checkbox-group.vue'
import WForm from './components/form.vue'
import WFormItem from './components/form-item.vue'

import WUI from '../packages'

import './assets/fonts/iconfont.css'
Vue.use(WUI)

Vue.config.productionTip = false

Vue.component(WButton.name, WButton)
Vue.component(WDialog.name, WDialog)
Vue.component(WInput.name, WInput)
Vue.component(WSwitch.name, WSwitch)
Vue.component(WRadio.name, WRadio)
Vue.component(WRadioGroup.name, WRadioGroup)
Vue.component(WCheckbox.name, WCheckbox)
Vue.component(WCheckGroup.name, WCheckGroup)
Vue.component(WForm.name, WForm)
Vue.component(WFormItem.name, WFormItem)

new Vue({
  render: h => h(App)
}).$mount('#app')
