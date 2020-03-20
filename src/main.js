import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Runtime from './components/Runtime.vue'
import Downloads from './components/Downloads.vue'
Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/runtime",
      component: Runtime
    },
    {
      path: "/downloads",
      component: Downloads
    }
  ],
  mode: "history"
})
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
