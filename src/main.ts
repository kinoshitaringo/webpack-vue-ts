/// main.ts
import Vue from 'vue';
import App from './App.vue';
import '@/plugins/ant-design-vue';

new Vue({
    name: 'App',
    render: (h) => h(App),
}).$mount('#root');
