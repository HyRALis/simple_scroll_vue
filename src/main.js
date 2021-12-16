import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll'

import App from './App.vue'

const app = createApp(App)

app.use(VueSmoothScroll, {
    duration: 400,
    offset: -90,
    updateHistory: false
});

app.mount('#app')
