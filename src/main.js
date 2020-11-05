import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore'

Vue.use(VueTextareaAutosize);

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
})

export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
