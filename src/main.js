import Vue from 'vue'
import App from './App.vue'
import lineClamp from 'vue-line-clamp';

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: (el) => {
    el.focus();
  }
});

Vue.use(lineClamp);

new Vue({
  render: h => h(App),
}).$mount('#app')
