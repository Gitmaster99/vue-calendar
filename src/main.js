import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyB7KViRBEU_hNRgK-oVbR8ltcQyEpQ2h5o",
    authDomain: "vue-calendar-5e8a6.firebaseapp.com",
    databaseURL: "https://vue-calendar-5e8a6.firebaseio.com",
    projectId: "vue-calendar-5e8a6",
    storageBucket: "vue-calendar-5e8a6.appspot.com",
    messagingSenderId: "711355683429",
    appId: "1:711355683429:web:320ffe57d68ee3df75ec8c"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
