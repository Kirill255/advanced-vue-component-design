import Vue from "vue"
import App from "./App.vue"
import PortalVue from "portal-vue"

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
