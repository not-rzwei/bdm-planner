import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BDMP from "./objects/BDMP";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  data: {
    BDMP: new BDMP()
  }
}).$mount("#app");
