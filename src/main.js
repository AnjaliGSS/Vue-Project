import {createApp} from 'vue'

//import axios from 'axios'
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//import router from './router';
//import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret);
const app=createApp(App)
//app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)


app.mount('#app');






 

  