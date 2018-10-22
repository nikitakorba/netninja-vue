import Vue from 'vue'
import App from './App.vue'

// Custom directives
Vue.directive("theme", {
  bind(elem, binding, vnode) {
    switch (binding.value) {
      case "wide":
        elem.style.maxWidth = "1200px";
        break;

      case "narrow":
        elem.style.maxWidth = "560px";
        break;
    }
    if (binding.arg === 'column') {
      elem.style.padding = '20px';
      elem.style.background = "#ddd";
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
