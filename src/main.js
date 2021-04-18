import Vue from 'vue';
import App from './App.vue';
import mitt from 'mitt';

const emiter = mitt();

export default emiter;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
